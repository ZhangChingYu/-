package dev.silvia.wechattrade.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import dev.silvia.wechattrade.dao.UserDao;
import dev.silvia.wechattrade.dto.address.AddressCreateDto;
import dev.silvia.wechattrade.dto.address.AddressUpdateDto;
import dev.silvia.wechattrade.dto.response.Result;
import dev.silvia.wechattrade.dto.response.ResultCode;
import dev.silvia.wechattrade.entity.User;
import dev.silvia.wechattrade.handlers.Packing.AddressPacking;
import dev.silvia.wechattrade.handlers.CheckUserAuthority;
import dev.silvia.wechattrade.handlers.TransferUTF8;
import dev.silvia.wechattrade.handlers.common.repository.UserRepository;
import dev.silvia.wechattrade.handlers.fileHandler.FileDirector;
import dev.silvia.wechattrade.handlers.fileHandler.ReadFile;
import dev.silvia.wechattrade.handlers.fileHandler.WriteFile;
import dev.silvia.wechattrade.service.IUserSettingService;
import dev.silvia.wechattrade.vo.AddressVo;
import dev.silvia.wechattrade.vo.AuthenticationVo;
import dev.silvia.wechattrade.vo.FeedbackVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Optional;

@Service
public class UserSettingServiceImpl extends ServiceImpl<UserDao, User> implements IUserSettingService {
    @Autowired
    private UserDao userDao;
    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Autowired
    TransferUTF8 transferUTF8;
    @Autowired
    private CheckUserAuthority CUA;
    @Autowired
    private ReadFile readFile;
    @Autowired
    private WriteFile writeFile;

    @Autowired
    private UserRepository accountRepository;

    private Result res;

    @Autowired
    private Optional<User> user;

    private String help_url = FileDirector.HELP_URL;

    private User user2;

    private String auth_url = FileDirector.AUTH_URL;
    //个人信息修改
    @Override
    public Result PersonalInfo(User request) {
        try {
            //转换utf8
            request=transferUTF8.switchUtf8(request);
            //存储
            accountRepository.save(request);
            res=new Result(ResultCode.SUCCESS);
            return res;
        } catch (Exception e) {
            res=new Result(ResultCode.FAIL);
            return res;
        }
    }
    //个人信息获取
    @Override
    public Optional<Result> Acquisition(Integer id) {
        user=accountRepository.findById(id);
        return this.user.filter(us-> {
            try {
                return true;
            } catch (Exception e) {
                return false;
            }}
        ).map(us->{
            //转换utf8
                    us=transferUTF8.switchUtf8Tc(us);
                    if(us.getAvatar()==null){
                        us.setAvatar(ReadFile.getBaseFile(readFile.getAvatarPicture(us.getPhone())));
                    }
                    else
                        us.setAvatar(ReadFile.getBaseFile(FileDirector.AVATAR_URL));
                    if(us.getPicture()!=null){
                        us.setPicture(ReadFile.getBaseFile(readFile.getAuthPicture(us.getPhone())));
                    }
                    res=new Result(ResultCode.SUCCESS,us);
                    return res;
                }

        );
    }
    //实名认证
    @Override
    public Result authentication(AuthenticationVo request) {
        try{
            User user1=accountRepository.findByPhone(request.getPhone()).get();
            user1.setIdCard(request.getIdNumber());
            user1.setRealName(request.getRealName());
            if(writeFile.storeAuthenticationPicture(request.getPhone(),request.getIdCardPic())==808){
                res=new Result(ResultCode.FAIL);
                return res;
            }
            user1.setAuthority(0);
            user1.setPicture(readFile.getAuthPicture(user1.getPhone()));
            res=new Result(ResultCode.SUCCESS);
            user1=transferUTF8.switchUtf8(user1);
            accountRepository.save(user1);
            return res;
        } catch (Exception e) {
            res=new Result(ResultCode.FAIL);
            return res;
        }
    }

    @Override
    public Result swapRelatedAvatar(String phone,String avatar) {
        User user1=accountRepository.findByPhone(phone).get();
        user1.setAvatar(avatar);
        accountRepository.save(user1);
        res=new Result(ResultCode.SUCCESS,user1);
        return res;
    }

    @Override
    public Result swapRelatedPhone(String phone) {
        User user1=accountRepository.findByPhone(phone).get();
        user1.setPhone(phone);
        accountRepository.save(user1);
        res=new Result(ResultCode.SUCCESS,user1);
        return res;
    }

    @Override
    public int realNameAuthentication(AuthenticationVo authenticationVo) {
        return 0;
    }

    @Override
    public int frozeAccount(String phone) {
        return 0;
    }

    @Override
    public int unfrozeAccount(String phone) {
        return 0;
    }

    @Override
    public List<String> AccountLog(String phone) {
        return null;
    }

    // 地址在數據庫中的統一格式(收件人%手機號%所在地區%詳細地址)
    // 不同地址用"#"區隔
    @Override
    public int addAddress(AddressCreateDto dto) {   // 格式是 add1#add2#add3#add4#.....addN#
        if(!CUA.isAuthorized(dto.getPhone())){
            return 403; // 用戶無權限
        }
        String sql;
        String new_address;
        User user = getUser(dto.getPhone());
        String old_address = user.getAddress();
        String address = transferUTF8.CtoUTF8(new AddressPacking().ObjectToAddress(dto.getReceiverName(), dto.getReceiverPhone(), dto.getRegion(), dto.getAddressDetail()));
        if(dto.getIsDefaultAddress() == 1){
            if(checkDefaultExist(dto.getPhone())){  // 如果是空的
                sql = "update user_info set default_address='"+address+"' where phone='"+dto.getPhone()+"'";
            }else { // 需要把現有的default地址放到其他地址裡
                new_address = user.getDefaultAddress() + transferUTF8.CtoUTF8("#") + old_address;
                sql = "update user_info set default_address='"+address+"', address='"+new_address+"' where phone='"+dto.getPhone()+"'";
            }
        }else { // 直接加在其他地址裡
            new_address = address+transferUTF8.CtoUTF8("#")+old_address;
            sql = "update user_info set address='"+new_address+"' where phone='"+dto.getPhone()+"'";
        }
        return checkUpdate(sql);
    }


    @Override
    public int addressEditing(AddressUpdateDto dto) {   // 更新地址
        User user = getUser(dto.getPhone());
        String sql;
        String new_address = new AddressPacking().ObjectToAddress(dto.getReceiverName(), dto.getReceiverPhone(), dto.getRegion(), dto.getAddressDetail());
        if(dto.getRank()==0){   // 直接更新
            if(user.getDefaultAddress() == null || user.getDefaultAddress().isEmpty()){
                return 4001; // 請求數據不存在
            }
            System.out.println("is not null: " + user.getDefaultAddress());
            sql = "update user_info set default_address='"+transferUTF8.CtoUTF8(new_address)+"' where phone='"+dto.getPhone()+"'";
        }else { // 其他都不能直接更新
            String[] old_address = splitCheck( transferUTF8.UTF8toC(user.getAddress()));
            if(old_address == null || dto.getRank() < 0 || dto.getRank() > old_address.length){
                return 4002; // 請求格式有誤，沒有這個rank或沒有地址存在
            }
            old_address[dto.getRank()-1] = new_address;
            String putTogether = "";
            for(int i = 0 ; i < old_address.length; i++){   // 拼起來
                putTogether+=old_address[i]+"#";
            }
            sql = "update user_info set address='"+transferUTF8.CtoUTF8(putTogether)+"' where phone='"+dto.getPhone()+"'";
        }
        return checkUpdate(sql);
    }

    @Override
    public int deleteAddress(String phone, Integer rank) {
        String sql;
        User user = getUser(phone);
        if(rank == 0){  // 直接刪除
            sql = "update user_info set default_address='' where phone='"+phone+"'";
        }else {
            String[] old_address = splitCheck(transferUTF8.UTF8toC(user.getAddress()));
            if(old_address == null || rank > old_address.length || rank < 0){
                return 400; // 請求地址不存在
            }
            String new_address;
            new_address = transferUTF8.UTF8toC(user.getAddress()).replaceAll(old_address[rank-1]+"#","");
            sql = "update user_info set address='"+transferUTF8.CtoUTF8(new_address)+"' where phone='"+phone+"'";
        }
        return checkUpdate(sql);
    }

    @Override
    public List<AddressVo> showAllAddress(String phone) {
        if(!CUA.isAuthorized(phone)){
            return null;
        }
        User user = getUser(phone);
        String address = transferUTF8.UTF8toC(user.getAddress());
        String default_address = transferUTF8.UTF8toC(user.getDefaultAddress());
        List<AddressVo> addressVos = new AddressPacking().StringToAddressVo(address,default_address);
        return addressVos;
    }

    @Override
    public AddressVo getDefaultAddress(String phone) {
        User user = getUser(phone);
        String default_address = user.getDefaultAddress();
        AddressVo addressVo = new AddressPacking().StringToAddressVo(transferUTF8.UTF8toC(default_address),0);
        return addressVo;
    }

    @Override
    public int setAsDefaultAddress(String phone, Integer rank) {
        if(rank == 0){  // 不需更新
            return 200;
        }
        String sql;
        User user = getUser(phone);
        String old_default = transferUTF8.UTF8toC(user.getDefaultAddress());
        String[] old_address = splitCheck(transferUTF8.UTF8toC(user.getAddress()));
        if(old_address == null || rank > old_address.length || rank < 0){
            return 400; // 沒有地址存在
        }
        String new_address, new_default;
        if(old_default == null || old_default.isEmpty()){  // 若default是空的，將old_address[rank-1]移過去
            new_default = transferUTF8.CtoUTF8(old_address[rank-1]);
            new_address = transferUTF8.UTF8toC(user.getAddress()).replaceAll(old_address[rank-1]+"#","");
            sql = "update user_info set default_address='" + new_default + "', address='"+ transferUTF8.CtoUTF8(new_address)+"' where phone='"+phone+"'";
        }
        else {  // 位置互換
            new_default = old_address[rank-1];
            old_address[rank-1] = old_default;
            new_address = "";
            for(int i = 0; i < old_address.length; i++){
                new_address += old_address[i]+"#";
            }
            sql = "update user_info set default_address='"+transferUTF8.CtoUTF8(new_default)+"', address='"+transferUTF8.CtoUTF8(new_address)+"' where phone='"+phone+"'";
        }
        return checkUpdate(sql);
    }

    @Override
    public List<String> getQuestionCatalog(){
        List<String> catalogs = readFile.getSubFileNames(help_url);
        return catalogs;
    }

    @Override
    public List<String> getQuestions(String catalog) {
        String root = help_url +"/"+catalog;
        List<String> questions = readFile.getSubFileNames(root);
        if(questions != null || !questions.isEmpty()){
            for(int i = 0 ; i < questions.size(); i++){
                questions.set(i, questions.get(i).replaceAll(".txt", ""));
            }
        }
        return questions;
    }

    @Override
    public String getAnswer(String catalog, String question) {
        String filePath = help_url +"/"+catalog+"/"+question+".txt";
        String answer = readFile.readHelpFile(filePath);
        return answer;
    }

    @Override
    public Integer sendFeedback(String phone, String content) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date = sdf.format(System.currentTimeMillis());
        User user = getUser(phone);
        if (user != null) {     // 確定用戶存在
            // 輸入流:用戶名+日期+內容，文件名:時間+用戶手機
            FeedbackVo feedback = new FeedbackVo();
            feedback.setContent(content);
            feedback.setDate(date);   // 獲取當前時間
            feedback.setFrom(transferUTF8.UTF8toC(user.getUserName())); // 獲取用戶名
            feedback.setPhone(phone);
            feedback.setYear(date.substring(0,4));
            feedback.setMonth(date.substring(5,7));
            feedback.setTime(date.substring(11,13)+date.substring(14,16)+date.substring(17));
            return writeFile.writeFeedbackFile(feedback);
        }
        return 400; // 找不到用戶
    }

    private User getUser(String phone){
        QueryWrapper<User> wrapper = new QueryWrapper<>();
        wrapper.eq("phone", phone);
        return userDao.selectOne(wrapper);
    }

    private boolean checkDefaultExist(String phone){    // 如果存在返回false
        User user = getUser(phone);
        return user.getDefaultAddress().isEmpty();
    }

    private String[] splitCheck(String decodeAddresses){
        if(decodeAddresses == null){
            return null;
        }
        return decodeAddresses.split("#");
    }

    private Integer checkUpdate(String sql){
        int check = jdbcTemplate.update(sql);
        if(check > 0){
            return 800;     // 更新成功
        }
        return 400; // 沒有數據更新
    }
}


package dev.silvia.wechattrade.handlers.fileHandler;
import dev.silvia.wechattrade.vo.FeedbackVo;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.Arrays;
import java.util.List;

@Component
public class WriteFile {
    private String feedback_url = FileDirector.FEEDBACK_URL;
    private String picture_url = FileDirector.PRODUCT_URL;
    private String auth_url = FileDirector.AUTH_URL;
    private String auth_temp_url = FileDirector.AUTHENTICATION_TEMP_URL;
    public static void storeMultipartFile(String filePath, String newName, MultipartFile file){
        OutputStream os = null;
        InputStream inputStream = null;
        String fileName = null;
        try {
            inputStream = file.getInputStream();
            fileName = newName+file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("."));
        } catch (IOException e) {
            e.printStackTrace();
        }
        try {
            String path = filePath;
            // 2、保存到临时文件
            // 1K的数据缓冲
            byte[] bs = new byte[1024];
            // 读取到的数据长度
            int len;
            // 输出的文件流保存到本地文件
            File tempFile = new File(path);
            if (!tempFile.exists()) {
                tempFile.mkdirs();
            }
            os = new FileOutputStream(tempFile.getPath() + File.separator + fileName);
            // 开始读取
            while ((len = inputStream.read(bs)) != -1) {
                os.write(bs, 0, len);
            }
        } catch (IOException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // 完毕，关闭所有链接
            try {
                os.close();
                inputStream.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public Integer writeFeedbackFile(FeedbackVo feedback){  // // 寫入feedback文件
        // C://Users/Sunny/Desktop/Feedback/(Year)/(Month)/(Time+Phone).txt
        String filePath = feedback_url;
        if(createDir(filePath, feedback.getYear())!=null){
            filePath = createDir(filePath, feedback.getYear());
            if(createDir(filePath, feedback.getMonth())!=null){
                filePath = createDir(filePath, feedback.getMonth());
                File file = new File(filePath+"/"+feedback.getTime()+feedback.getPhone()+".txt");
                BufferedWriter out = null;
                try {
                    out = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(file),"UTF-8"));
                    out.write("From: "+feedback.getFrom()+"\r\n");
                    out.write("Date: "+feedback.getDate()+"\r\n");
                    out.write(feedback.getContent()+"\r\n"); // 寫入"換行"時一定要用\r\n否則無效
                } catch (FileNotFoundException e) {
                    System.out.println("File is not fond!");
                    return 422;
                } catch (IOException e) {
                    System.out.println("Read or Write Exception!");
                    return 422;
                } finally {     // BufferedWriter out 一定要close()否則不會寫入
                    if(null != out){
                        try {
                            out.close();
                        } catch (IOException e){
                            e.printStackTrace();
                        }
                    }
                }
                return 200;
            }
            System.out.println("Create file path failed on month!");
            return 422;
        }
        System.out.println("Create file path failed on year!");
        return 422;
    }

    public int storeOnePicture(String catalog, String number, Integer index, MultipartFile picture){
        String pathName = picture_url + catalog + "/" + number;
        File folder = new File(pathName);
        if(!folder.isDirectory()){
            if(!folder.mkdirs()){
                return 808; // 路徑創建失敗
            }
        }
        // 以封面為例: 商品編號_0.jpg
        String new_name = number+ "_" + index;
        storeMultipartFile(pathName, new_name, picture);
        return 201; // 存儲成功
    }

    public int createUserFilePath(String phone){    // 註冊時創建用戶文件路徑
        String avatarPath = FileDirector.AUTH_URL.substring(0,27);
        String authenticationPath = FileDirector.AUTH_URL.substring(0,27);
        Integer[] check = {0,0};
        if(createDir(avatarPath, phone) != null){
            avatarPath = createDir(avatarPath, phone);
            authenticationPath = createDir(authenticationPath, phone);
            if(createDir(avatarPath, "Avatar")!= null){
                // C:/Users/Sunny/Desktop/(Phone)/Avatar
                check[0] = 1;
            }
            if(createDir(authenticationPath, "Authentication") != null){
                // C:/Users/Sunny/Desktop/(Phone)/Authentication
                check[1] = 1;
            }
        }
        if(check[0].equals(check[1]) && check[0].equals(1)){
            return 201; // 路徑創建完成
        }
        return 800;     // 路徑創建失敗
    }

    public int storeAuthPicAtTemp(String phone, MultipartFile picture){
        // 將尚未通過的用戶證件照保存在AuthTemp文件夾內，等通過後再移入用戶文件夾，若不通過則刪除圖片
        // C:/Users/Sunny/Desktop/User/AuthTemp/(Phone).jpg
        String file_path = auth_temp_url;
        String new_name = phone;
        storeMultipartFile(file_path, new_name, picture);
        return 201; // 存儲成功
    }

    public int storeAuthenticationPicture(String phone, MultipartFile picture){
        // C:/Users/Sunny/Desktop/User/12434789874/Authentication
        String pathName = auth_url + phone+"/Authentication";
        File folder = new File(pathName);
        if(!folder.isDirectory()){
            if(!folder.mkdirs()){
                return 808; // 路徑創建失敗
            }
        }
        // C:/Users/Sunny/Desktop/User/12434789874/Avatar/12434789874.jpg
        String new_name = phone;
        storeMultipartFile(pathName, new_name, picture);
        return 201; // 存儲成功
    }

    public int storeAvatarPicture(String phone, MultipartFile picture){
        // C:/Users/Sunny/Desktop/User/12434789874/Avatar
        String pathName = auth_url + phone+"/Avatar";
        File folder = new File(pathName);
        if(!folder.isDirectory()){
            if(!folder.mkdirs()){
                return 808; // 路徑創建失敗
            }
        }
        // C:/Users/Sunny/Desktop/User/12434789874/Authentication/12434789874.jpg
        String newName = phone;
        storeMultipartFile(pathName,newName,picture);
        return 201; // 存儲成功
    }

    private String createDir(String root, String dir){
        File url = new File(root+"/"+dir);
        if(!url.isDirectory()){
            if(!url.mkdirs()){
                return null;
            }
        }
        return root+"/"+dir;
    }
}



package dev.silvia.wechattrade.dto.chat;
import lombok.Data;

@Data
//聊天列表数据
public class ChatListData {
    //两者的关联id
    private String number;

    //聊天对象用户名
    private String toName;

    //聊天对象电话
    private String toId;

    //聊天对象的头像
    private String toAvatar;

    //最后一条信息
    private String lastMessage;

    //未读数
    private int unread;

    //最后一条信息发送时间
    private String time;

    //发送者在哪个聊天框
    private int fromWindow;
}

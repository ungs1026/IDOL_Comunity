package com.weverse.sb.media.dto;

import java.time.LocalDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class MediaChatMessageDTO {
	
	private Long mediaId;
    private Long userId;
    private String nickname;
    private String content;
    private LocalDateTime sentAt;
    
    private List<MediaChatMessageDTO> chatList;
    

}

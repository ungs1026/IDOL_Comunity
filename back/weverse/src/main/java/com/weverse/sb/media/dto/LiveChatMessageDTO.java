package com.weverse.sb.media.dto;

import java.time.LocalDateTime;

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
public class LiveChatMessageDTO {
	
	private Long streamingId;
    private Long userId;
    private String nickname;
    private String content;
    private LocalDateTime sentAt;

}

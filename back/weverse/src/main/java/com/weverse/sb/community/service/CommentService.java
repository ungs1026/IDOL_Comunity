package com.weverse.sb.community.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.weverse.sb.community.entity.Comment;

@Service
public interface CommentService {

	List<Comment> getCommentList(Long groupId);

	void inputComment(Long postId, String content, Long userId, String authorType);
	
	int getCommentCountByPostId(Long postId);

}

package com.example.board.web.dto;


import com.example.board.domain.board.Board;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class BoardResponseDto {

    private Long id;
    private String title;
    private String content;
    private String author;

    public BoardResponseDto(Board entity){ //보여줄 내용들을 엔티티값으로 가져옴
        this.id =entity.getId();
        this.title =entity.getTitle();
        this.content = entity.getContent();
        this.author = entity.getAuthor();
    }

}

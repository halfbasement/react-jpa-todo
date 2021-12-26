package com.example.board.web.dto;

import com.example.board.domain.board.Board;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
public class BoardSaveDto {

    private String title;
    private String content;
    private String author;

    //빌더로 만들어야한다

    public Board toEntity(){
        return Board.builder()
                .title(title)
                .content(content)
                .author(author)
                .build();
    }
}

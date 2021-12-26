package com.example.board.web.dto;

import com.example.board.domain.board.Board;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class BoardUpdateDto {

    private String title;
    private String content;

    public BoardUpdateDto(String title,String content)
    {
        this.title = title;
        this.content = content;
    }

}

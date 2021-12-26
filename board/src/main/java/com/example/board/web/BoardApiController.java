package com.example.board.web;

import com.example.board.service.board.BoardService;
import com.example.board.web.dto.BoardListResponseDto;
import com.example.board.web.dto.BoardResponseDto;
import com.example.board.web.dto.BoardSaveDto;
import com.example.board.web.dto.BoardUpdateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor//di
@RestController
public class BoardApiController {

    private final BoardService boardService;


    @PostMapping("/board")
    public Long save(@RequestBody BoardSaveDto saveDto){
        return boardService.save(saveDto);
    }


    @GetMapping("/")
    public List<BoardListResponseDto> findAll(){
        return  boardService.findAll();
    }

    @GetMapping("/board/{id}")
    public BoardResponseDto findById(@PathVariable Long id){
        return boardService.findById(id);
    }


    @PutMapping("/board/{id}")
    public Long update(@PathVariable Long id , @RequestBody BoardUpdateDto boardUpdateDto){
        return boardService.update(id,boardUpdateDto);
    }

    @DeleteMapping("/board/{id}")
    public Long delete(@PathVariable Long id){
        return boardService.delete(id);
    }

}

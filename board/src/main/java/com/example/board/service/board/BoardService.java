package com.example.board.service.board;

import com.example.board.domain.board.Board;
import com.example.board.domain.board.BoardRepository;
import com.example.board.web.dto.BoardListResponseDto;
import com.example.board.web.dto.BoardResponseDto;
import com.example.board.web.dto.BoardSaveDto;
import com.example.board.web.dto.BoardUpdateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class BoardService {

    private final BoardRepository boardRepository;

    @Transactional
    public Long save(BoardSaveDto saveDto){
        return boardRepository.save(saveDto.toEntity()).getId();
    }

    @Transactional
    public Long update(Long id, BoardUpdateDto boardUpdateDto){
        Board entity =  boardRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 게시물 없음 ID="+id));

        //찾은 게시물 update
        entity.update(boardUpdateDto.getTitle(), boardUpdateDto.getContent()); //더티체킹 (영속성)


        return id;
    }


    @Transactional
    public Long delete(Long id) {

        Board entity =  boardRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 게시물 없음 ID="+id));

        boardRepository.delete(entity);

        return id;
    }

    public List<BoardListResponseDto> findAll(){

        return boardRepository.findAll().stream().map(BoardListResponseDto::new).collect(Collectors.toList()); //board->new BoardListResponseDto(board)]
        //board의 stream을 map을통해 BoardListResponseDto로 변환 -> 리스트로 반환

    }


    public BoardResponseDto findById(Long id){
      Board entity =  boardRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 게시물 없음 ID="+id));
      return new BoardResponseDto(entity);
    }


}

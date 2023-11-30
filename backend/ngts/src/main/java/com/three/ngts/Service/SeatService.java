package com.three.ngts.Service;

import com.three.ngts.Entity.Seat;
import com.three.ngts.Entity.Ticket;
import com.three.ngts.Repo.SeatRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class SeatService {

    @Autowired
    private SeatRepo seatRepo;

    @PutMapping("/seats/updateTicket")
    public Seat updateTicket(@RequestBody Seat seat){
        Seat newSeat = seatRepo.findBySeatId(seat.getSeatId());
        newSeat.setTicket(seat.getTicket());
        return seatRepo.save(newSeat);
    }
}

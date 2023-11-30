package com.three.ngts.Service;

import com.three.ngts.Entity.Ticket;
import com.three.ngts.Repo.TicketRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class TicketService {

    @Autowired
    private TicketRepo ticketRepo;

    @PostMapping("/tickets/insert")
    public Ticket insert(@RequestBody Ticket ticket){
        return ticketRepo.save(ticket);
    }
}

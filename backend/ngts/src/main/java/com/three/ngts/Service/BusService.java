package com.three.ngts.Service;

import com.three.ngts.Entity.Bus;
import com.three.ngts.Repo.BusRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class BusService {

    @Autowired
    private BusRepo busRepo;

    @PostMapping("/buses/insert")
    public Bus insert(@RequestBody Bus bus){
        return busRepo.save(bus);
    }
}

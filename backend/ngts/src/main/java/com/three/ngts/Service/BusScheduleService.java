package com.three.ngts.Service;

import com.three.ngts.Entity.BusSchedule;
import com.three.ngts.Repo.BusScheduleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class BusScheduleService {

    @Autowired
    private BusScheduleRepo busScheduleRepo;

    @PostMapping("/busSchedules/insert")
    public BusSchedule insert(@RequestBody BusSchedule busSchedule){
        return busScheduleRepo.save(busSchedule);
    }
}

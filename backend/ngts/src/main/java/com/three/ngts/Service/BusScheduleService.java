package com.three.ngts.Service;

import com.three.ngts.Entity.BusSchedule;
import com.three.ngts.Entity.Seat;
import com.three.ngts.Repo.BusScheduleRepo;
import com.three.ngts.Repo.SeatRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class BusScheduleService {

    @Autowired
    private BusScheduleRepo busScheduleRepo;

    @Autowired
    private SeatRepo seatRepo;

    @PostMapping("/busSchedules/insert")
    public BusSchedule insert(@RequestBody BusSchedule busSchedule){
        BusSchedule busSchedule1 = busScheduleRepo.save(busSchedule);
        char ch = '@';
        for (int i = 0; i < busSchedule1.getBus().getBusCapacity(); i++) {
            if (i%4 == 0){
                ch++;
            }
            Seat seat = new Seat();
            seat.setSeatNo(ch + String.valueOf((i%4)+1));
            seat.setBusSchedule(busSchedule1);
            seatRepo.save(seat);
        }

        return busSchedule1;
    }
}

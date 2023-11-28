package com.three.ngts.Service;

import com.three.ngts.Entity.Auth;
import com.three.ngts.Entity.BusSchedule;
import com.three.ngts.Entity.Name;
import com.three.ngts.Entity.User;
import com.three.ngts.Repo.AuthRepo;
import com.three.ngts.Repo.BusScheduleRepo;
import com.three.ngts.Repo.NameRepo;
import com.three.ngts.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class NameService {

    @Autowired
    private NameRepo nameRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private AuthRepo authRepo;

    @Autowired
    private BusScheduleRepo busScheduleRepo;

    @PostMapping("/names/insert")
    public Name insert(@RequestBody Name name){
        return nameRepo.save(name);
    }

    @PostMapping("/names/getFreeDriver")
    public List<Name> getFreeDriver(BusSchedule busScheduleProp){
        List<User> allUsers = userRepo.findAll();
        List<Name> freeDriver = new ArrayList<Name>();

        for (User user: allUsers){
            List<Auth> auths = authRepo.findByUser(user);
            boolean isDriver = false;
            for(Auth auth: auths){
                if (auth.getType().equals("busDriver")) {
                    isDriver = true;
                    break;
                }
            }
            if (isDriver){
                List<BusSchedule> busSchedules = busScheduleRepo.findBusSchedulesByDriver(user);
                boolean hasScheduleClash = false;
                for(BusSchedule busSchedule: busSchedules){
                    if (!((busSchedule.getDepartureTime().before(busScheduleProp.getDepartureTime()) && busSchedule.getArrivalTime().before(busScheduleProp.getArrivalTime())) || (busSchedule.getDepartureTime().after(busScheduleProp.getDepartureTime()) && busSchedule.getArrivalTime().after(busScheduleProp.getArrivalTime())))) {
                        hasScheduleClash = true;
                        break;
                    }
                }
                if (!hasScheduleClash){
                    freeDriver.add(nameRepo.findByUser(user));
                }
            }
        }
        return freeDriver;
    }
}

package com.three.ngts.Service;

import com.three.ngts.Entity.Driver;
import com.three.ngts.Repo.DriverRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class DriverService {

    @Autowired
    private DriverRepo driverRepo;

    @PostMapping("/drivers/insert")
    public Driver insert(@RequestBody Driver driver){
        return driverRepo.save(driver);
    }

}

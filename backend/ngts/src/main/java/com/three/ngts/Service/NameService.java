package com.three.ngts.Service;

import com.three.ngts.Entity.Name;
import com.three.ngts.Repo.NameRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class NameService {

    @Autowired
    private NameRepo nameRepo;

    @PostMapping("/names/insert")
    public Name insert(@RequestBody Name name){
        return nameRepo.save(name);
    }
}

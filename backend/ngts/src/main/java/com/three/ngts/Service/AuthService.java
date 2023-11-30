package com.three.ngts.Service;

import com.three.ngts.Entity.Auth;
import com.three.ngts.Repo.AuthRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class AuthService {

    @Autowired
    private AuthRepo authRepo;

    @PostMapping("/auths/insert")
    public Auth insert(@RequestBody Auth auth) {
        return authRepo.save(auth);
    }
}

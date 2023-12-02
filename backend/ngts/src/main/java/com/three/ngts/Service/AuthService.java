package com.three.ngts.Service;

import com.three.ngts.Entity.Auth;
import com.three.ngts.Entity.User;
import com.three.ngts.Repo.AuthRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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

    @PostMapping("/auths/update")
    public Auth update(@RequestBody User user) {
        List<Auth> auths = authRepo.findByUser(user);
        Auth auth = auths.get(0);
        auth.setType("busDriver");
        return authRepo.save(auth);
    }

    @GetMapping("/auths/getAllDriver")
    public List<User> getAllDriver() {
        List<Auth> auths = authRepo.findAll();
        List<User> drivers = new ArrayList<>();

        for (Auth auth : auths) {
            if (auth.getType().equals("busDriver")) {
                drivers.add(auth.getUser());
            }
        }
        return drivers;
    }
}

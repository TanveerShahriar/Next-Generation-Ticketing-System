package com.three.ngts.Service;

import com.three.ngts.Entity.BusReview;
import com.three.ngts.Entity.CustomEntity.TicketView;
import com.three.ngts.Entity.DriverReview;
import com.three.ngts.Repo.DriverReviewRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class DriverReviewService {

    @Autowired
    private DriverReviewRepo driverReviewRepo;

    @PostMapping("/driverReviews/insert")
    public DriverReview insert(@RequestBody DriverReview driverReview){
        return driverReviewRepo.save(driverReview);
    }

    @PostMapping("/driverReviews/checkReview")
    public boolean checkReview(@RequestBody TicketView ticketView){
        List<DriverReview> driverReviews = driverReviewRepo.findAllByTicketAndDriverAndReviewer(ticketView.getTicket(), ticketView.getBusSchedule().getDriver(), ticketView.getTicket().getUser());
        return !driverReviews.isEmpty();
    }
}

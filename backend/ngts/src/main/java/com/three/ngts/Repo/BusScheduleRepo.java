package com.three.ngts.Repo;

import com.three.ngts.Entity.BusSchedule;
import com.three.ngts.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.sql.Timestamp;
import java.util.List;

@Repository
@CrossOrigin(origins = "http://localhost:3000")
public interface BusScheduleRepo extends JpaRepository<BusSchedule, Long> {
    List<BusSchedule> findBusSchedulesByDriver(User user);

//    List<BusSchedule> findBusSchedulesByDepartureTimeAfter(Timestamp timestamp);
    List<BusSchedule> findBusSchedulesByDepartureTimeAfterAndDepartureTimeBefore(Timestamp timestamp1, Timestamp timestamp2);
}

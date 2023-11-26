package com.three.ngts.Repo;

import com.three.ngts.Entity.BusSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusScheduleRepo extends JpaRepository<BusSchedule, Long> {
}

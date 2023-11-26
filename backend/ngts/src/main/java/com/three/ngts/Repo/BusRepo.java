package com.three.ngts.Repo;

import com.three.ngts.Entity.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusRepo extends JpaRepository<Bus, Long> {
}

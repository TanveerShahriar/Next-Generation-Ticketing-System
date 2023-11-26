package com.three.ngts.Repo;

import com.three.ngts.Entity.RouteDistrict;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RouteDistrictRepo extends JpaRepository<RouteDistrict, Long> {
}

package com.three.ngts.Repo;

import com.three.ngts.Entity.BusReview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusReviewRepo extends JpaRepository<BusReview, Long> {
}

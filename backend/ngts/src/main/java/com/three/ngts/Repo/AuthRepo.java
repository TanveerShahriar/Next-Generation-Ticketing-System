package com.three.ngts.Repo;

import com.three.ngts.Entity.Auth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthRepo extends JpaRepository<Auth, Long> {
}

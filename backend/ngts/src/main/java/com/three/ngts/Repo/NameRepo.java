package com.three.ngts.Repo;

import com.three.ngts.Entity.Name;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NameRepo extends JpaRepository<Name, Long> {
}

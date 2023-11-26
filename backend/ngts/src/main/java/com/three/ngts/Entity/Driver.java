package com.three.ngts.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "driver")
public class Driver {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "driver_id")
    private Long driverId;

    @Column(name = "driver_license_no")
    private Long driverLicenseNo;

    @Column(name = "driver_license_exp")
    private String driverLicenseExp;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User userId;
}

package com.three.ngts.Entity;

import java.util.List;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "route")
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "route_id")
    private Long routeId;

    @OneToMany(mappedBy = "route", fetch = FetchType.LAZY)
    private List<RouteDistrict> routeDistricts;

    @OneToMany(mappedBy = "route", fetch = FetchType.LAZY)
    private List<BusSchedule> busSchedules;
}

package com.three.ngts.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "bus_schedule")
public class BusSchedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "schedule_id")
    private Long scheduleId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bus_id")
    private Bus bus;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "route_id")
    private Route route;

    @Column(name = "departure_time")
    private java.sql.Timestamp departureTime;

    @Column(name = "arrival_time")
    private java.sql.Timestamp arrivalTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "driver_id")
    private User driver;
}

package com.three.ngts.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "bus")
public class Bus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bus_id")
    private Long busId;

    @Column(name = "bus_no")
    private String busNo;

    @Column(name = "bus_type")
    private String busType;

    @Column(name = "bus_capacity")
    private Long busCapacity;

    @OneToMany(mappedBy = "bus", fetch = FetchType.LAZY)
    private List<Ticket> tickets;

    @OneToMany(mappedBy = "bus", fetch = FetchType.LAZY)
    private List<Seat> seats;

    @OneToMany(mappedBy = "bus", fetch = FetchType.LAZY)
    private List<BusSchedule> busSchedules;

    @OneToMany(mappedBy = "bus", fetch = FetchType.LAZY)
    private List<BusReview> busReviews;
}

package com.three.ngts.Entity;

import java.util.List;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "ticket")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ticket_id")
    private Long ticketId;

    @Column(name = "purchase_date")
    private java.sql.Timestamp purchaseDate;

    @ManyToOne
    @JoinColumn(name = "bus_id")
    private Bus bus;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "refunded")
    private boolean refunded;

    @OneToMany(mappedBy = "ticket")
    private List<Seat> seats;
}
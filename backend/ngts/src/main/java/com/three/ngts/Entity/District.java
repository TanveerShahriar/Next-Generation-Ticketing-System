package com.three.ngts.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "district")
public class District {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dist_id")
    private Long distId;

    @Column(name = "dist_name")
    private String distName;

    @OneToMany(mappedBy = "district", fetch = FetchType.LAZY)
    private List<RouteDistrict> routeDistricts;
}

import React from 'react';
import { Player, BigPlayButton } from 'video-react';

const BrakesSubMenuData = {
    /* Top Menu */
    data: [
        // Dynamometer
        [
            {
                'label' : 'M-1200 Dyno',
                'backgroundImage' : '/images/Brakes/Dynamometer/M-1200/M-1200ASD1.jpg',
                'pathname' : 'm1200Dyno'
            },
            {
                'label' : 'M-1400 Dyno',
                'backgroundImage' : '/images/Brakes/Dynamometer/M-1400/M-1400Dyno1.jpg',
                'pathname' : 'm1400Dyno'
            },
            {
                'label' : 'M-2000 Friction Standards Dyno',
                'backgroundImage' : '/images/Brakes/Dynamometer/M-2000/M-2000Dyno1.jpg',
                'pathname' : 'm2000FrictionStandardDyno'
            },
            {
                'label' : 'M-2900 Dyno',
                'backgroundImage' : '/images/Brakes/Dynamometer/M-2900/M-2900Dyno1.jpg',
                'pathname' : 'm2900Dyno'
            },
            {
                'label' : 'M-3000 Dyno',
                'backgroundImage' : '/images/Brakes/Dynamometer/M-3000/M-3000Dyno1.jpg',
                'pathname' : 'm3000Dyno'
            },
            {
                'label' : 'M-3900 NVH Dyno',
                'backgroundImage' : '/images/Brakes/Dynamometer/M-3900/M-3900Dyno1.jpg',
                'pathname' : 'm3900NVHDyno'
            },
            {
                'label' : 'M-3900 SR Dyno',
                'backgroundImage' : '/images/Brakes/Dynamometer/M-3900SR/M-3900SR1.jpg',
                'pathname' : 'm3900SRDyno'
            },
            {
                'label' : 'M-4900 Chassis Dyno',
                'backgroundImage' : '/images/Brakes/Dynamometer/M-4900/M-4900Dyno1.jpg',
                'pathname' : 'm4900ChassisDyno'
            },
            {
                'label' : 'M-6900 Heavy Truck Dyno',
                'backgroundImage' : '/images/Brakes/Dynamometer/M-6900/M-6900Dyno1.jpg',
                'pathname' : 'm6900HeavyTruckDyno'
            },
            {
                'label' : 'M-7200 Train Full Scale Brake Dyno',
                'backgroundImage' : '/images/Brakes/Dynamometer/M-7200/M-7200-1.jpg',
                'pathname' : 'm7200TrainFullScaleBrakeDyno'
            },
            {
                'label' : 'M-8700 Aircraft Roll  Dyno',
                'backgroundImage' : '/images/Brakes/Dynamometer/M-8700/M-8700Dyno1.jpg',
                'pathname' : 'm8700AircraftRollDyno'
            },
            {
                'label' : 'M-8900 Aircraft Brake  Dyno',
                'backgroundImage' : '/images/Brakes/Dynamometer/M-8900/M-8900Dyno1.jpg',
                'pathname' : 'm8900AircraftBrakeDyno'
            },
        ],
        // Test Stands
        [
            {
                'label' : 'Model 200/600 Chase Friction Material',
                'backgroundImage' : '/images/Brakes/Test_Stands/Model200-600/M-200-600CFM1.jpg',
                'pathname' : 'm200_600chaseFrictionMaterial'
            },
            {
                'label' : 'Model 1450 Low Pressure Rotor Wear',
                'backgroundImage' : '/images/Brakes/Test_Stands/Model1450/M-1450LPRW1.jpg',
                'pathname' : 'm1450LowPressureRotorWear'
            },
            {
                'label' : 'Model 1620 Compressibility Machine',
                'backgroundImage' : '/images/Brakes/Test_Stands/Model1620/M-1620CM1.jpg',
                'pathname' : 'model1620CompressibilityMachine'
            },
            {
                'label' : 'Hydraulic Model 1620-H',
                'backgroundImage' : '/images/Brakes/Test_Stands/Model1620H/M-1620-H1.jpg',
                'pathname' : 'hydraulicModel1620h'
            },
            {
                'label' : 'Model 2490 Torque Flex Durability',
                'backgroundImage' : '/images/Brakes/Test_Stands/Model2490/M-2490TFD1.jpg',
                'pathname' : 'model2490TorqueFlexDurability'
            },
            {
                'label' : 'Model 2636 Brake Functionality Test',
                'backgroundImage' : '/images/Brakes/Test_Stands/Model2636/M-2636BFTS1.jpg',
                'pathname' : 'model2636BrakeFunctionalityTest'
            },
            {
                'label' : 'Model 3016 Residual Drag & RTV',
                'backgroundImage' : '/images/Brakes/Test_Stands/Model3016/M-3016RDM1.jpg',
                'pathname' : 'model3016ResidualDrag_RTV'
            },
            {
                'label' : 'Model 3664 Shear Test machine',
                'backgroundImage' : '/images/Brakes/Test_Stands/Model3664_REPLACEM-2876/M-3664SM1.jpg',
                'pathname' : 'model2876ShearTestMachine'
            },
            {
                'label' : 'Model 3070 Vehicle DTV & Drag Tester',
                'backgroundImage' : '/images/Brakes/Test_Stands/Model3070/M-3070VDT1.jpg',
                'pathname' : 'model3070VehicleDTV_DragTester'
            },
            {
                'label' : 'Model 3315 Rotor Mapping Station',
                'backgroundImage' : '/images/Brakes/Test_Stands/Model3315/M-3315RMS1.jpg',
                'pathname' : 'model3315RotorMappingStation'
            },
            {
                'label' : 'Model 3378 Portable Vehicle DTV & Drag',
                'backgroundImage' : '/images/Brakes/Test_Stands/Model3378/M-3378P1.jpg',
                'pathname' : 'model3378PortableVehicleDTV_Drag'
            },
            {
                'label' : 'Model 3394 NVH Master Cylinder Test',
                'backgroundImage' : '/images/Brakes/Test_Stands/Model3394/M-3394NVH1.jpg',
                'pathname' : 'model3394NVHMasterCylinderTest'
            },
            {
                'label' : 'Shapix 1500',
                'backgroundImage' : '/images/Brakes/Test_Stands/Shapix1500/Shapix15001.jpg',
                'pathname' : 'shapix1500'
            },
            {
                'label' : 'ABS Expert Heavy-Duty Brake',
                'backgroundImage' : '/images/Brakes/Test_Stands/ABSExpertHeavy/ABSExpert1.jpg',
                'pathname' : 'ABSExpertHeavyDutyBrake'
            },
            {
                'label' : 'Air System Expert',
                'backgroundImage' : '/images/Brakes/Test_Stands/AirSystemExpert/AirSystemExpert1.jpg',
                'pathname' : 'airSystemExpert'
            },
            {
                'label' : 'Brake Shim Damping Test Stand',
                'backgroundImage' : '/images/Brakes/Test_Stands/BrakeShim/BrakeShim1.jpg',
                'pathname' : 'brakeShimDampingTestStand'
            },
            {
                'label' : 'BM 14200 Roller Brake Tester',
                'backgroundImage' : '/images/Brakes/Test_Stands/BM14200/BM14200RBT1.jpg',
                'pathname' : 'bm14200RollerBrakeTester'
            },
            {
                'label' : 'Model 20200 Roller Brake Tester',
                'backgroundImage' : '/images/Brakes/Test_Stands/Model20200/M-20200RBT1.jpg',
                'pathname' : 'model20200RollerBrakeTester'
            },
            {
                'label' : 'BM 3010 Mobile Brake Tester',
                'backgroundImage' : '/images/Brakes/Test_Stands/BM3010/BM3010.jpg',
                'pathname' : 'BM3010MobileBrakeTester'
            },
            {
                'label' : 'Model 100 Fast Machine',
                'backgroundImage' : '/images/Brakes/Test_Stands/Model-100/Model100FM1.jpg',
                'pathname' : 'model100FastMachine'
            },
            {
                'label' : 'The Krauss machine (RWS100B)',
                'backgroundImage' : '/images/Brakes/Test_Stands/RWS100B/RWS100B1.jpg',
                'pathname' : 'RWS100B'
            },
            {
                'label' : 'Model 2552 Booster Test Stand',
                'backgroundImage' : '/images/Brakes/Test_Stands/Model2552/M-2552BTS1.jpg',
                'pathname' : 'model2552BoosterTestStand'
            }
        ],
        // Sub Systems /images/Brakes/Test_Stands/Model1620/RWS100B1.jpg
        [
            {
                'label' : 'Model 3945 Road Load Simulation',
                'backgroundImage' : '/images/Brakes/Sub_Systems/Model3945RoadLoadSimulation/M-3945RLS1.jpg',
                'pathname' : 'model3945RoadLoadSimulation'
            },
            {
                'label' : 'Model 2864 Passive Road Wheel',
                'backgroundImage' : '/images/Brakes/Sub_Systems/Model2864PassiveRoadWheel/M-2864PRW1.jpg',
                'pathname' : 'model2864PassiveRoadWheel'
            },
            {
                'label' : 'Model 5002 Residual Drag Tailstock',
                'backgroundImage' : '/images/Brakes/Sub_Systems/Model5002ResidualDragTailstock/M-5002RDT1.jpg',
                'pathname' : 'model5002ResidualDragTailstock'
            }, 
        ]     
    ],
    brakesMenus : [
        {
            'label' : 'Dynamometer',
            'backgroundImage' : '',
            'pathname' : 'dynamometer',
            'classLabel': 'dynamometer-item-container'            
        },
        {
            'label' : 'Test Stands',
            'backgroundImage' : '',
            'pathname' : 'test-stands',
            'classLabel': 'testStands-item-container'             
        },
        {
            'label' : 'Sub Systems',
            'backgroundImage' : '',
            'pathname' : 'sub-systems',
            'classLabel': 'subSystems-item-container'             
        },
    ], 
    pageData: [
        {
            /* Dynamometer */
            m1200Dyno: {
                subSection: "Brakes",
                brakesSubSection: "Dynamometer •",
                title : "Automotive Sub-Scale Dynamometer - Model 1200",
                body :
                <div>
                    <p>The Model 1200 Sub-Scale Automotive Dynamometer provides an economical alternative to full scale dynamometer testing.  This machine is configured to replicate full scale brake assemblies by utilizing approximately one-fifth scale samples of a variety of friction materials to analyze actual vehicle braking conditions. The universal caliper and rotor provide a convenient way to evaluate friction materials without actual vehicle components.</p>
                    <br />
                    <h3>APPLICATIONS:</h3>
                    <ul>
                        <li>Frictional Material Development</li>
                    </ul>
                    <br />
                    <h3>Standard Specifications:</h3>
                    <ul>
                        <li>Control System: ProLINK&trade; Software</li>
                        <li>Torque Capacity: 600 Nm</li>
                        <li>Test Rotor: 235 mm diameter</li>
                        <li>Fixture type: Universal caliper</li>
                        <li>Brake Enclosure: Insulated, double-walled, stainless steel</li>
                        <li>Main Drive: AC Motor 40KW</li>
                        <li>Speed: 1500/2500 rpm</li>
                        <li>Mechanical Inertia System: One fixed disc (8 to 18 kgm<sup>2</sup>)</li>
                        <li>Temperature Measurement: 2 rotating channels (slip ring), 4 stationary</li>
                    </ul>                           
                </div>,
                items : [
                    {
                        media :     
                        <Player
                            preload={"auto"}
                            playsInline
                            fluid={false}
                            autoPlay={true}
                            // poster="images/_assets/poster.png"
                            src="/images/Brakes/Dynamometer/M-1200/M-1200Video.mp4"
                        >
                            <BigPlayButton position="center" />
                        </Player>,
                        backgroundImage : "/images/flat_icons/playThumb.jpg"
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-1200/M-1200ASD1.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-1200/M-1200ASD1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-1200/M-1200ASD2.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-1200/M-1200ASD2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-1200/M-1200ASD3.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-1200/M-1200ASD3.jpg"/>,
                    },
                ]               
            },
            m1400Dyno: {
                subSection: "Brakes",
                brakesSubSection: "Dynamometer •",
                title : "Model 1400 Aircraft Sub-Scale Dynamometer",
                body :
                <div>
                    <p>The Model 1400 Sub-Scale Aircraft Dynamometer provides an economical alternative to full scale dynamometer testing.  This dynamometer replicates the kinetic energy per unit, and other parameters, such as temperature, at the friction interface.  It is used extensively in simulating the performance of carbon-carbon brakes. The Model 1400 is designed to replicate and analyze actual aircraft operating conditions at the friction interface.  The precisely controlled linear loading system closely controls the unit pressure between test samples.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Friction Material Development of aircraft carbon-carbon brakes</li>
                    </ul>
                    <div className="list-table">
                    <br />
                        <h3>Standard Specifications:</h3>
                        <div>
                            <ul>
                                <li>Control System: <br />ProLINK Software</li>
                                <li>Torque Capacity: 675 NM</li>
                                <li>Brake Enclosure: <br />14 Gage steel</li>
                                <li>Main Drive: Motor - 30kW &middot; Speed - 3570/7000rpm</li>
                                <li>Mechanical Inertia System:<br /><span>Engagement - Manual</span><br /><span>Minimum Inertia - 0.20 kgm<sup>2</sup></span><br /><span>Maximum Inertia - 2.15 kgm<sup>2</sup></span><br /><span>Inertia Increment - <br />0.085 kgm<sup>2</sup></span></li>
                            </ul>
                            <ul>
                                <li>Mechanical Inertia System:<br /><span>Engagement - Manual</span><br /><span>Minimum Inertia - 0.20 kgm<sup>2</sup></span><br /><span>Maximum Inertia - 2.15 kgm<sup>2</sup></span><br /><span>Inertia Increment - <br />0.085 kgm<sup>2</sup></span></li>
                                <li>Servo Brake Apply System:<br /><span>Maximum Apply Force - 35,000 N</span><br /><span>Maximum Apply Rate - <br />40,000 N/sec</span></li>
                                <li>Temperature Measurement: <br />2 rotating channels (slip ring)</li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <h3>Test Procedures:</h3>
                    <ul>
                        <li>Taxing</li>
                        <li>Landing</li>
                        <li>Rejected take-off</li>
                    </ul>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-1400/M-1400Dyno1.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-1400/M-1400Dyno1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-1400/M-1400Dyno2.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-1400/M-1400Dyno2.jpg"/>,
                    },
                ]               
            },
            m200FrictionStandardsDyno: {
                subSection: "Brakes",
                brakesSubSection: "Dynamometer •",
                title : "Model 2000 Friction Standard Dynamometer",
                body :
                <div>
                    <p>The Model 2000 is a full inertia friction standard dynamometer designed specifically to conduct the most commonly run global test procedures for development of hydraulically actuated brake calipers, friction materials, drums and rotors for passenger vehicles and light trucks. Its compact layout efficiently and economically allows evaluation of brake friction development, design and quality control. The Model 2000 incorporates the latest technology, software, controls and proven components, which result in low maintenance. It is an excellent value at an affordable price point, and comes with the added benefit of having a short lead-time for fast delivery, while saving time and cost for installation.</p>

                    <div className="list-table">
                        <br />
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Performance and wear</li>
                                <li>Fade and effectiveness</li>
                            </ul>
                            <ul>
                                <li>Quality control</li>
                                <li>Friction development</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Specifications:</h3>
                        <div>
                            <ul>
                                <li>Control Software: ProLINK</li>
                                <li>Drive Motor: 94 kW</li>
                                <li>Inertia Range with I-Sim: 5 <br />– 260 kgm</li>
                            </ul>
                            <ul>
                                <li>Brake Torque: 5650 Nm</li>
                                <li>Mechanical Inertia: 19.5 <br />– 149.5 kgm</li>
                                <li>Shaft Speed: 0 – 2000 rpm</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Test Procedures:</h3>
                        <div>
                            <ul>
                                <li>SAE J2522 Dynamometer Global Effectiveness</li>
                                <li>SAE J2784 FMVSS Inertia Dynamometer Test Procedure</li>
                                <li>ISO 26786:2009 Friction behavior assessment for automotive brake systems</li>
                                <li>IS0-TC22-SC2-N557 Global Spec Section 7</li>
                            </ul>
                            <ul>
                                <li>JASO C406:2000 Passenger car – Braking device – Dynamometer test procedure</li>
                                <li>ECE R90-02:2013-Annex 9 <br />- Part A Determination of friction behavior by machine testing</li>
                            </ul>
                        </div>
                    </div>                           
                </div>,
                items : [
                    {
                        media :     
                        <Player
                            preload={"auto"}
                            playsInline
                            fluid={false}
                            autoPlay={true}
                            // poster="images/_assets/poster.png"
                            src="/images/Brakes/Dynamometer/M-2000/M-2000DynoVideo.mp4"
                        >
                            <BigPlayButton position="center" />
                        </Player>,
                        backgroundImage : "/images/flat_icons/playThumb.jpg"
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-2000/M-2000Dyno1.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-2000/M-2000Dyno1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-2000/M-2000Dyno2.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-2000/M-2000Dyno2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-2000/M-2000Dyno3.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-2000/M-2000Dyno3.jpg"/>,
                    },
                ]               
            },
            m2900Dyno: {
                subSection: "Brakes",
                brakesSubSection: "Dynamometer •",
                title : "Model 2900 Automotive Brake Performance Dynamometer",
                body :
                <div>
                    <p>Model 2900 Dynamometer provides an efficient and easy to use tool to perform controlled input or output performance tests on hydraulically actuated automotive brake assemblies. The system incorporates state-of-the-art technology for optimal correlation to actual operating conditions. It enables precise and accurate measurement of performance, effectiveness, thermal capacity, and other attributes related to in-service braking. The system incorporates state-of-the-art technology for optimal correlation to actual operating conditions.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Performance</li>
                        <li>Wear</li>
                        <li>Effectiveness</li>
                        <li>Thermal capacity</li>
                    </ul>

                    <div className="list-table"> 
                        <br />
                        <h3>Standand Specifications:</h3>
                        <div>
                            <ul>
                                <li>Software: ProLINK</li>
                                <li>Sample Rate: 2500 samples/sec</li>
                                <li>Test Parts: Conventional and Knuckle brake assemblies</li>
                                <li>Installation: Sub frame foundation</li>
                                <li>Main Drive Motor: 185 kW DC</li>
                            </ul>
                            <ul>
                                <li>Max. Speed: 1150/2000 rpm (Optional 3000 rpm)</li>
                                <li>Pressure: 206 bar</li>
                                <li>Temperature: 4 rotating (telemetry) and 4 non-rotating</li>
                                <li>Temperature: 4 rotating (slip ring) and 4 non-rotating</li>
                                <li>Torque: 5640 Nm (In-Line, Non-Rotating)</li>
                            </ul>
                        </div>
                    </div>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-2900/M-2900Dyno1.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-2900/M-2900Dyno1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-2900/M-2900Dyno2.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-2900/M-2900Dyno2.jpg"/>,
                    },
                ]               
            },
            m3000Dyno: {
                subSection: "Brakes",
                brakesSubSection: "Dynamometer •",
                title : "Model 3000 Automotive Inertia Brake Dynamometer",
                body :
                <div>
                    <p>The Model 3000 Dynamometer is a full-sized system designed to evaluate braking performance characteristics of hydraulically actuated automotive and light truck brake assemblies. This state-of-the-art machine incorporates a mechanical inertia section, combined with electric motor Inertia Simulation (I-Sim) capability, to replicate actual operating conditions and has been proven to correlate with vehicle test data. The Model 3000 Dynamometer is the perfect machine for research and development testing of brake calipers, friction materials, drums, and rotors in a controlled test environment. It is highly configurable, with a wide range of optional features.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Performance</li>
                        <li>Wear</li>
                        <li>Effectiveness</li>
                        <li>Thermal capacity</li>
                    </ul>

                    <div className="list-table">
                        <br />
                        <h3>Standand Specifications:</h3>
                        <div>
                            <ul>
                                <li>Software: ProLINK</li>
                                <li>Sample Rate: 1000 samples/sec/channel</li>
                                <li>Fixtures: Conventional and Knuckle brakes</li>
                                <li>Main Drive Motor: 185 kW, Max. Speed 1150/2000 rpm, Optional 2500 rpm</li>
                                <li>Inertia: Minimum 4.9 kgm2, Maximum: (see Inertia Graphs)</li>
                            </ul>
                            <ul>
                                <li>Inertia Discs (standard): 1 Fixed @ 76 kgm<sup>2</sup></li>
                                <li>Inertia Discs (optional): 1 Fixed, 2 Removable <br />@ 43 kgm<sup>2</sup> per disc</li>
                                <li>Temperature: 4 rotating (telemetry) and 4 non-rotating</li>
                                <li>Tailstock: Conventional or Residual Drag</li>
                                <li>Torque: 5640 Nm (In-Line Non-Rotating)</li>
                            </ul>
                        </div>
                    </div>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-3000/M-3000Dyno1.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-3000/M-3000Dyno1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-3000/M-3000Dyno2.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-3000/M-3000Dyno2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-3000/M-3000Dyno3.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-3000/M-3000Dyno3.jpg"/>,
                    }
                ]               
            },
            m3900nyhDyno: {
                subSection: "Brakes",
                brakesSubSection: "Dynamometer •",
                title : "Model 3900 NVH Brake Dynamometer",
                body :
                <div>
                    <p>The full-sized Model 3900 NVH Brake Dynamometer is used to evaluate Noise, Vibration, and Harshness (NVH) of automotive and medium truck brake systems in a controlled temperature and humidity environment. Utilizing a vehicle suspension fixture, it can accurately reproduce system NVH frequencies during low-speed brake drag protocols. Available in Standard, High Speed (HS) and Heavy Duty (HD) versions, this highly configurable Dynamometer can also be used for performance brake testing.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Environmentally controlled brake NVH analysis for automotive and medium truck applications</li>
                        <li>Performance testing</li>
                    </ul>
                    <br />
                    <h3>Typical Test Procedures:</h3>
                    <ul>
                        <li>NVH Testing</li>
                        <li>SAE J2521 – Brake Squeal</li>
                        <li>Cold Matrix</li>
                        <li>Brake Torque Variation (BTV)</li>
                        <li>Low Speed, High Torque Drag Procedures</li>
                        <li>City Traffic Noise Route Simulations</li>
                        <li>All Performance Dynamometer Test Procedures</li>
                    </ul>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-3900/M-3900Dyno1.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-3900/M-3900Dyno1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-3900/M-3900Dyno2.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-3900/M-3900Dyno2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-3900/M-3900Dyno3.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-3900/M-3900Dyno3.jpg"/>,
                    }
                ]               
            },
            m3900srDyno: {
                subSection: "Brakes",
                brakesSubSection: "Dynamometer •",
                title : "Model 3900-SR NVH Squeal Rig",
                body :
                <div>
                    <p>The Model 3900-SR NVH Squeal Rig is a full-sized test machine solely designed for brake noise testing on automotive and light truck applications up to 5,650 Nm. It incorporates a specially designed AC motor that delivers precise high-torque drag capability required for NVH brake testing. The unique feature of the Squeal Rig is its single fixed inertia disc, relying exclusively on inertia simulation and requires no technician disc change-outs.<br /><br />Controlled in an acoustic free field chamber, The Model 3900-SR NVH Squeal Rig has one purpose in mind, to pinpoint the source of brake noise and eliminate it through successful design enhancement testing.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                    <li>Brake Squeal testing on automotive &amp; light truck applications</li>
                    </ul>

                    <div className="list-table">
                        <br />   
                        <h3>Specifications:</h3>
                        <div>
                            <ul>
                                <li>Control Software: ProLINK</li>
                                <li>Sample Rate: 2000 samples/sec</li>
                                <li>Drive Motor: 186 kW(AC)</li>
                                <li>Shaft Speed: 0 - 1500 rpm</li>
                                <li>Brake Torque: 5650 Nm</li>
                                <li>Drag Torque: n/a / 100 Nm</li>
                                <li>Mechanical Inertia: 27.5 kgm</li>
                            </ul>
                            <ul>
                                <li>Inertia Range with I-Sim: 5 - 250 kgm<sup>2</sup></li>
                                <li>Brake Apply Pressure: 200 bar</li>
                                <li>Brake Apply Rate: 700 bar/sec / 1000 bar/sec</li>
                                <li>Temperature: -20 to +60 &deg;C / -40 to +60 &deg;C</li>
                                <li>Humidity: 15 to 95% RH</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Typical Test Procedures:</h3>
                        <div>
                            <ul>
                                <li>Noise, Vibration and Harshness Tests</li>
                                <li>SAE J2521 – Brake Squeal</li>
                                <li>Cold Matrix</li>
                            </ul>
                            <ul>
                                <li>Brake Torque Variation (BTV)</li>
                                <li>Low Speed High Torque Drag Procedures</li>
                            </ul>
                        </div>
                    </div>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-3900SR/M-3900SR1.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-3900SR/M-3900SR1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-3900SR/M-3900SR2.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-3900SR/M-3900SR2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-3900SR/M-3900SR3.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-3900SR/M-3900SR3.jpg"/>,
                    }
                ]               
            },
            m4900ChassisDyno: {
                subSection: "Brakes",
                brakesSubSection: "Dynamometer •",
                title : "M-4900 - Chassis Dyno",
                body :
                <div>
                    <p>A chassis dynamometer brings laboratory testing one step closer to real world conditions while maintaining the cost and reduced development timing achieved by laboratory testing. The Model 4900 provides the capability to evaluate a wide range of vehicles and a full set of tools for control and measurement. Typical applications include powertrain, brake, tire, and interior trim evaluations.</p>
                    <br />
                    <h3>Options:</h3>
                    <ul>
                        <li>Number of Rolls &mdash; 1, 2, or 4</li>
                        <li>Roll Diameter</li>
                        <li>Number of drive motors</li>
                        <li>Roll surface finish</li>
                        <li>Automated apply systems</li>
                        <li>Test chamber type</li>
                        <li>Environmental conditioning system</li>
                        <li>Pop-up engine cooler</li>
                        <li>Under body airflow system</li>
                        <li>Data acquisition and measurement systems</li>
                    </ul>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-4900/M-4900Dyno1.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-4900/M-4900Dyno1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-4900/M-4900Dyno2.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-4900/M-4900Dyno2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-4900/M-4900Dyno3.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-4900/M-4900Dyno3.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-4900/M-4900Dyno4.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-4900/M-4900Dyno4.jpg"/>,
                    },
                ]               
            },
            m6900HeavyTruckDyno: {
                subSection: "Brakes",
                brakesSubSection: "Dynamometer •",
                title : "Model 6900 Commercial Vehicle Brake Dynamometer",
                body :
                <div>
                    <p>The Model 6900 Dynamometer is a full-sized system robustly designed to evaluate braking performance characteristics up to 35,000 Nm for off-highway and commercial vehicle applications. The incorporation of a multi-disc inertia section combined with electric motor I-Sim capability allows the machine to replicate exact test conditions required for brake testing. It is a qualified machine for research and development of drum brakes, air disc brakes, hydraulic disc brakes, and friction material within a structured test setting that is proven to compare with full vehicle results.</p>

                    <div className="list-table">
                        <br />  
                        <h3>Standand Specifications:</h3>
                        <div>
                            <ul>
                                <li>Control Software: ProLINK</li>
                                <li>Sample Rate: 2000 samples/sec</li>
                                <li>Drive Motor: 186 kW / 224 kW</li>
                                <li>Shaft Speed: 0 - 1200 rpm / 0 - 1500 rpm</li>
                                <li>Brake Torque: 35,000 Nm</li>
                                <li>Drag Torque: - / 400 Nm</li>
                                <li>Mechanical Inertia: 156 - 2093 kgm<sup>2</sup> / 156 - 2689 kgm<sup>2</sup></li>
                            </ul>
                            <ul>
                                <li>Inertia Range with I-Sim: 20 - 2500 kgm<sup>2</sup> / 20 - 3000 kgm<sup>2</sup></li>
                                <li>Pneumatic Brake Pressure: 10 bar / 12 bar</li>
                                <li>Pneumatic Apply Rate: 20 bar/sec</li>
                                <li>Hydraulic Apply Pressure: - / 200 bar</li>
                                <li>Hydraulic Apply Rate: - / 700 bar/sec</li>
                            </ul>
                        </div>
                        <br />    
                        <h3>Test Procedures:</h3> 
                        <div>
                            <ul>
                                <li>FMVSS121</li>
                                <li>SAE J2115</li>
                                <li>European standards</li>
                                <li>Performance Wear</li>
                            </ul>
                            <ul>
                                <li>Durability</li>
                                <li>Thermal Capacity</li>
                                <li>City Traffic Route Simulations</li>
                            </ul>
                        </div>
                    </div>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-6900/M-6900Dyno1.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-6900/M-6900Dyno1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-6900/M-6900Dyno2.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-6900/M-6900Dyno2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-6900/M-6900Dyno3.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-6900/M-6900Dyno3.jpg"/>,
                    },
                ]               
            },
            m7200TrainFullScaleBrakeDyno: {
                subSection: "Brakes",
                brakesSubSection: "Dynamometer •",
                title : "Model 7200 Train Full Scale Brake Dynamometer",
                body :
                <div>
                    <p>The Model 7200 Train Full Scale Brake Dynamometer is an efficient and accurate tool for train brake performance and noise testing. It performs controlled input or output tests on pneumatically actuated brake assemblies. It precisely measures performance, effectiveness, thermal capacity, noise and vibration, and other attributes related to in- service braking. Employing four clutched mechanical discs and electrically simulated inertia, this dynamometer is able to reproduce a wide range of inertia values. Hydraulic bearing lubrication dissipates heat from the high speed inertia discs. The tailstock accommodates many different brake assembly fixtures. A Walk-in Test Chamber, Environmental Control, Automated Inertia Disc Clutches, a Thermal Camera, NVH Measurement, and a Static Torque subsystem are also available.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Train brake performance testing</li>
                        <li>Noise testing</li>
                    </ul>
                    <div className="list-table">
                        <br />
                        <h3>Specifications:</h3>
                        <div>
                            <ul>
                                <li>Software: ProLINK</li>
                                <li>ampling Rate: 2,000 Hz</li>
                                <li>Drive System: 600 kw VFAC Motor</li>
                                <li>Max Rotational Speed: 3100 rpm</li>
                                <li>Static Torque: 40 kw AC motor continuous rotation (optional)</li>
                                <li>Inertia: 5,000 kgm2 &lt;1,700 rpm, 2,400 kgm2 &lt;3,000 rpm, with electric simulation</li>
                                <li>Torque: 35,000 Nm Maximum</li>
                            </ul>
                            <ul>
                                <li>Ambient Air Speed: 0-150 km/h</li>
                                <li>Temperature: -20&deg;C to +50&deg;C</li>
                                <li>Humidity: 10% - 90% RH (5-50&deg;C)</li>
                                <li>Brake Apply System: Servo-pneumatic</li>
                                <li>Force: 100 kN Maximum</li>
                                <li>Force: 100 kN Maximum</li>
                                <li>heel Diameter: 1250 mm Maximum</li>
                            </ul>
                        </div>
                    </div>                            
                </div>,
                items : [
                    {
                        media :     
                        <Player
                            preload={"auto"}
                            playsInline
                            fluid={false}
                            autoPlay={true}
                            // poster="images/_assets/poster.png"
                            src="/images/Brakes/Dynamometer/M-7200/M-7200.mp4"
                        >
                            <BigPlayButton position="center" />
                        </Player>,
                        backgroundImage : "/images/flat_icons/playThumb.jpg"
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-7200/M-7200-1.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-7200/M-7200-1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-7200/M-7200-2.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-7200/M-7200-2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-7200/M-7200-3.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-7200/M-7200-3.jpg"/>,
                    }
                ]               
            },
            m8700AircraftRollDyno: {
                subSection: "Brakes",
                brakesSubSection: "Dynamometer •",
                title : "Model 8700 Aircraft Roll Dynamometer",
                body :
                <div>
                    <p>The LINK Roll Dynamometer Machine is capable of reproducing the radial and side forces acting on aircraft wheels to evaluate their integrity. This road wheel type machine functions by applying a controllable load to the test wheel and tire.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Aircraft wheel integrity</li>
                    </ul>
                    <br />
                    <h3>Standand Specifications:</h3>
                    <ul>
                        <li>Control System: ProLink</li>
                        <li>Maximum Radial Load: 175,000 lbs</li>
                        <li>Maximum Side Load: 60,000 lbs</li>
                        <li>Motor Size: 650 HP</li>
                        <li>Maximum Speed: 25 mph</li>
                        <li>Roll Diameter: 120”</li>
                        <li>Yaw Angle: +/- 25&deg;</li>
                        <li>Camber Control: +/- 20&deg; (Optional)</li>
                        <li>2nd Carriage: Additional test carriage (Optional)</li>
                    </ul>                              
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-8700/M-8700Dyno1.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-8700/M-8700Dyno1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-8700/M-8700Dyno2.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-8700/M-8700Dyno2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-8700/M-8700Dyno3.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-8700/M-8700Dyno3.jpg"/>,
                    },
                ]               
            },
            m8900AircraftBrakeDyno: {
                subSection: "Brakes",
                brakesSubSection: "Dynamometer •",
                title : "Model 8900 Full-Scale Aircraft Electrical/Mechanical Inertia Dynamometer",
                body :
                <div>
                    <p>The Electrical/Mechanical Inertia Dynamometer machine simulates landing stresses on aircraft wheels and brakes by stimulating conventional and emergency braking conditions with landings speeds of up to 350 mph. The equipment is unique in that it combines mechanical and electrical energy to provide maximum testing capabilities that can simulate aircraft weight, windage, drag, thrust, and other dynamic characteristics.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Tests integrity of aircraft wheels and brakes</li>
                        <li>Finite element stress analysis on Roadwheel</li>
                    </ul>
                    <br />
                    <h3>Specifications:</h3>
                    <ul>
                        <li>120” dia. X 60” wide road-wheel</li>
                        <li>350 mph road-wheel surface speed</li>
                        <li>150,000 lb Radial Load</li>
                        <li>50,000 lb Drag Load</li>
                        <li>200,000 lb-ft Brake Torque Test Capacity, Continuous Rotation</li>
                        <li>5,000 psi Skydrol and mineral oil brake application system</li>
                        <li>+/- 20 degree Yaw Adjustment</li>
                        <li>6730 Horsepower Drive Capability</li>
                    </ul>                              
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-8900/M-8900Dyno1.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-8900/M-8900Dyno1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-8900/M-8900Dyno2.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-8900/M-8900Dyno2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Dynamometer/M-8900/M-8900Dyno3.jpg",
                        media: <img src="/images/Brakes/Dynamometer/M-8900/M-8900Dyno3.jpg"/>,
                    },
                ]               
            },
            /* Test Stands */
            model200600: {
                subSection: "Brakes",
                brakesSubSection: "Test Stands •",
                title : "MODEL 200 - MODEL 600 CHASE FRICTION MATERIAL TEST SYSTEM",
                body :
                <div>
                    <p>The Chase Friction Material Test Machines (Model 200 and Model 600) are designed and engineered to evaluate the frictional characteristics of materials used in braking systems in accordance with the SAE J661 test procedure.  The machine may be effectively utilized for quality control, research and development, or certification type applications, with highly repeatable results. Two models are available, with normal load test capacities of 890 or 2,670 N.<br /><br />The LINK Chase Friction Material Test Machine is a recognized standard throughout the world and provides precise data on frictional material performance and wear characteristics.</p>

                    <div className="list-table">
                        <br />    
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Research of Drum or Disc Brake Linings</li>
                                <li>Quality Control of Drum or Disc Brake Linings</li>
                            </ul>
                            <ul>
                                <li>European standards</li>
                            </ul>
                        </div>
                        <br />   
                        <h3>Standand Specifications:</h3>
                        <div>
                            <ul>
                                <li>Normal Load Model 200: <br />0 to 890 N / Model 600: <br />0 to 2670 N</li>
                                <li>Friction Force Model 200: <br />0 to 445 N / Model 600: <br />0 to 1330 N</li>
                                <li>Speed: 0 to 1000 RPM</li>
                                <li>Temperature: 0 to 540&deg;C</li>
                            </ul>
                            <ul>
                                <li>Sample Size: 25.4 x 25.4 x 6.35 mm</li>
                                <li>Drag Torque: - / 400 Nm</li>
                                <li>Machine Size: 762 mm D x 1829 mm L x 1575 mm H</li>
                                <li>Approximate Weight: 1134 kg</li>
                            </ul>
                        </div> 
                        <br /> 
                        <h3>Test Procedures:</h3>
                        <div>
                            <ul>
                                <li>SAE J661</li>
                            </ul>
                        </div>
                    </div>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model200-600/M-200-600CFM1.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model200-600/M-200-600CFM1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model200-600/M-200-600CFM2.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model200-600/M-200-600CFM2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model200-600/M-200-600CFM3.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model200-600/M-200-600CFM3.jpg"/>,
                    },
                ]               
            },
            mode1450LowPressureRotor: {
                subSection: "Brakes",
                brakesSubSection: "Test Stands •",
                title : "Model 1450 Low Pressure Rotor Wear Test Machine",
                body :
                <div>
                    <p>The LINK Model 1450 Low Pressure Wear Machine is designed to generate accelerated rotor wear with the application of low-pressure drag, simulating rotor wear characteristics representative of off-brake operation.<br /><br />A fixture holds the friction sample parallel, and flat, to the rotor surface without vibration. The sample is centered for mid-radius alignment at a twelve o’clock position. The friction sample is pressed against the spinning rotor at a controlled pressure of up to 1 Bar.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Rotor wear</li>
                        <li>Off-brake operation analysis</li>
                    </ul>
                    <br />
                    <h3>Standard Specifications:</h3>
                    <ul>
                        <li>Sample Size: 25.4 x 12.7 cm</li>
                        <li>Motor Size: 0.75 kW</li>
                        <li>Motor Speed: 700—1100 rpm</li>
                        <li>Maximum Pressure Apply: 1 Bar</li>
                        <li>Pressure Control Accuracy: 0.034 Bar</li>
                        <li>Rotor Mounting: 3 Jaw Chuck</li>
                        <li>Radius Range: 5.3-22.9 cm</li>
                    </ul>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model1450/M-1450LPRW1.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model1450/M-1450LPRW1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model1450/M-1450LPRW2.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model1450/M-1450LPRW2.jpg"/>,
                    }
                ]               
            },
            model1620CompressibilityMachine: {
                title : "Model 1620 Compressibility Machine",
                body :
                <div>
                    <p>The Model 1620 Compressibility Test Machine provides a complete workstation to evaluate the compressibility of friction materials at ambient and elevated temperatures up to 600 °C. It is offered with either a pneumatic or hydraulic actuation system and conforms to U.S. and worldwide testing requirements. The hydraulic machine provides increased control accuracy and response. Both machines provide excellent precision and repeatability to measure deflection in microns, with consistent measurements over thousands of samples.</p>

                    <div className="list-table">
                        <br />    
                        <h3>Applications:</h3> 
                        <div>
                            <ul>
                                <li>Quality control</li>
                                <li>Compliance testing</li>
                                <li>Product development and application research</li>
                            </ul>
                            <ul>
                                <li>Brake pads/linings, clutch/wet friction/transmission discs, noise insulators, gaskets</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Standand Specifications:</h3>
                        <div>
                            <ul>
                                <li>Load Control Modes: Force, Brake System pressure or Pad Surface Area Pressure</li>
                                <li>Cylinder Stroke Length: 40 mm / 100 mm</li>
                                <li>Load Capacities: 60kN or <br />94 kN</li>
                                <li>Load Capacities: 60kN or <br />94 kN</li>
                                <li>Load Control Accuracy (High Load): +/- 40 N (+/- 9.0 lb) (steady state)</li>
                            </ul>

                            <ul>
                                <li>Load Control Accuracy (Low Load): +/- 20 N (+/- 4.5 lb) (steady state)</li>
                                <li>Low Preload Capability: 100 N (60 kN machine) : 157 N (94 kN Machine)</li>
                                <li>Rate of Travel (Load Apply): <br />0 kN/s to 50 kN/s</li>
                                <li>Rate of Travel (Load Release): 0 kN/s to 50 kN/s</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Test Procedures:</h3>
                        <div>
                            <ul>
                                <li>SAE J2468</li>
                            </ul>
                            <ul>
                                <li>ISO 6310</li>
                            </ul>
                        </div>
                    </div>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model1620/M-1620CM1.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model1620/M-1620CM1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model1620/M-1620CM2.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model1620/M-1620CM2.jpg"/>,
                    }
                ]               
            },
            hydralicModel1620h: {
                subSection: "Brakes",
                brakesSubSection: "Test Stands •",
                title : "Hydraulic Model 1620-H Compressibility Machine",
                body :
                <div>
                    <p>The Hydraulic Model 1620-H Compressibility Machine utilizes a hydraulic oil input control force versus pneumatic. The stiffer hydraulic oil provides increased control accuracy and response. The loading block has been redesigned as a lightweight component lowering the pre-load threshold.</p>

                    <div className="list-table">
                        <br />    
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Quality control</li>
                                <li>Compliance testing</li>
                                <li>Product development and application research</li>
                            </ul>
                            <ul>
                                <li>Brake pads/linings, clutch/wet friction/transmission discs, noise insulators, gaskets</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Standand Specifications:</h3>
                        <div>
                            <ul>
                                <li>Load Control Modes: Force, Brake System pressure or Pad Surface Area Pressure</li>
                                <li>Cylinder Stroke Length: 100 mm (3.94 in)</li>
                                <li>Deflection Resolution: +/- 0.1 &#230;m (3.9 &#230;in)</li>
                                <li>Load Capacities: 60kN</li>
                                <li>Load Measurement Accuracy: +/- 0.5 %FS</li>
                                <li>Rate of Travel (Load Release): 0 kN/s to 150 kN/s</li>
                            </ul>
                            <ul>
                                <li>Load Control Accuracy (High Load): +/- 10 N (2.2 lb) (steady state)</li>
                                <li>Load Control Accuracy (Low Load): +/- 10 N (2.2 lb) (steady state)</li>
                                <li>Low Preload Capability: 30 N (6.7 lb)</li>
                                <li>Rate of Travel (Load Apply): 0 kN/s to 150 kN/s</li>
                            </ul>
                        </div>
                    </div>                           
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model1620H/M-1620-H1.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model1620H/M-1620-H1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model1620H/M-1620-H2.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model1620H/M-1620-H2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model1620H/M-1620-H3.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model1620H/M-1620-H3.jpg"/>,
                    }
                ]               
            },
            model2490TorqueFlexDurabilityMachine: {
                subSection: "Brakes",
                brakesSubSection: "Test Stands •",
                title : "Model 2490 Torque Flex Durability Machine",
                body :
                <div>
                    <p>The Hydraulic Model 1620-H Compressibility Machine utilizes a hydraulic oil input control force versus pneumatic. The stiffer hydraulic oil provides increased control accuracy and response. The loading block has been redesigned as a lightweight component lowering the pre-load threshold.</p>

                    <div className="list-table">
                        <br />    
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Quality control</li>
                                <li>Compliance testing</li>
                                <li>Product development and application research</li>
                            </ul>
                            <ul>
                                <li>Brake pads/linings, clutch/wet friction/transmission discs, noise insulators, gaskets</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Standand Specifications:</h3>
                        <div>
                            <ul>
                                <li>Load Control Modes: Force, Brake System pressure or Pad Surface Area Pressure</li>
                                <li>Cylinder Stroke Length: 100 mm (3.94 in)</li>
                                <li>Deflection Resolution: +/- 0.1 &#230;m (3.9 &#230;in)</li>
                                <li>Load Capacities: 60kN</li>
                                <li>Load Measurement Accuracy: +/- 0.5 %FS</li>
                                <li>Rate of Travel (Load Release): 0 kN/s to 150 kN/s</li>
                            </ul>
                            <ul>
                                <li>Load Control Accuracy (High Load): +/- 10 N (2.2 lb) (steady state)</li>
                                <li>Load Control Accuracy (Low Load): +/- 10 N (2.2 lb) (steady state)</li>
                                <li>Low Preload Capability: 30 N (6.7 lb)</li>
                                <li>Rate of Travel (Load Apply): 0 kN/s to 150 kN/s</li>
                            </ul>
                        </div>
                    </div>                           
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model2490/M-2490TFD1.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model2490/M-2490TFD1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model2490/M-2490TFD2.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model2490/M-2490TFD2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model2490/M-2490TFD3.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model2490/M-2490TFD3.jpg"/>,
                    }
                ]               
            },
            model2636BrakeFunctionalityTestStand: {
                subSection: "Brakes",
                brakesSubSection: "Test Stands •",
                title : "Model 2636 Brake Functionality Test Stand",
                body :
                <div>
                    <p>The Model 2636 Brake Functionality Test Stand is a versatile system that can perform a number of performance and durability tests on automotive brake components. The test stand uses a hydraulic brake apply unit for durability testing, and an electric brake apply unit for high pressure (burst) testing. This machine performs piston roll back tests by applying fluid pressure to the brake caliper, simulating service conditions, and measuring movement of the brake piston when the pressure is released. It also performs knock back testing by applying a force directly to the piston with a linear actuator to stimulate additional piston movement.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Durability &amp; performance testing of automotive brake components</li>
                        <li>Piston roll back and knock back tests of automotive brake calipers</li>
                    </ul>

                    <div className="list-table">
                        <br />
                        <h3>Standand Specifications:</h3>
                        <div>
                            <ul>
                                <li>Flow Meter: Maximum Flow Volume 98 cc</li>
                                <li>Flow rate: 0.2 cc/sec to 160 cc/sec</li>
                                <li>Maximum Pressure: 200 Bar Hydraulic, 500 Bar electric</li>
                                <li>Maximum Stroke: 25 mm</li>
                                <li>Stroke Speed: 0.1 to 220 mm/sec</li>
                            </ul>
                            <ul>
                                <li>Maximum Force: 1150 N Hydraulic, 4460 N electric</li>
                                <li>Force Ramp Rate: 5 to 500 N/sec</li>
                                <li>6 Linear travel LVDTs</li>
                                <li>3 Pressure transducers</li>
                                <li>2 Fluid Displacement transducers</li>
                            </ul>
                        </div>
                    </div>                           
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model2636/M-2636BFTS1.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model2636/M-2636BFTS1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model2636/M-2636BFTS2.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model2636/M-2636BFTS2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model2636/M-2636BFTS3.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model2636/M-2636BFTS3.jpg"/>,
                    }
                ]               
            },
            model2876ShearTestMachine: {
                subSection: "Brakes",
                brakesSubSection: "Test Stands •",
                title : "Model 3664 Shear Test machine",
                body :
                <div>
                    <p>The Model 3664 Shear Test machine is designed to evaluate the bond strength interface between a friction material pad and its backing plate for passenger car and medium truck disc brakes, typically using the SAE J840 Test Procedure. A normal load is applied during testing, such that the friction force is minimized and does not significantly affect the shear load. Fixtures are utilized to match the radius at the point of lining contact.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Passenger car brake pads</li>
                        <li>Medium truck brake pads</li>
                    </ul>
                    <br />
                    <h3>Stand Specifications:</h3>
                    <ul>
                        <li>Controls: ProLINK</li>
                        <li>Maximum Shear Load: 66,720 N</li>
                        <li>Shear Load Apply Rate: 4500 N/sec, 10 mm/min</li>
                        <li>Maximum Normal Load: 5340 N</li>
                        <li>Maximum Friction Material Pad Size: Medium Truck</li>
                    </ul>
                    <br />
                    <h3>Test Procedures:</h3>
                    <ul>
                        <li>SAE J840 Test Procedure</li>
                    </ul>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model3664_REPLACEM-2876/M-3664SM1.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model3664_REPLACEM-2876/M-3664SM1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model3664_REPLACEM-2876/M-3664SM2.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model3664_REPLACEM-2876/M-3664SM2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model3664_REPLACEM-2876/M-3664SM3.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model3664_REPLACEM-2876/M-3664SM3.jpg"/>,
                    }
                ]               
            },
            model3016ResidalDragAndRTVMachine: {
                subSection: "Brakes",
                brakesSubSection: "Test Stands •",
                title : "Model 3016 Residual Drag &amp; RTV Machine",
                body :
                <div>
                    <p>The Model 3016 is a dual-ended test machine, which can be configured for residual brake drag measurements and generation of wear induced Rotor Thickness Variation. This test system can provide overall torque variation figures, order analysis of torque variation, or reconstructed waveforms.</p>

                    <div className="specs-table">
                        <br />    
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Measure off-brake drag</li>
                                <li>Evaluate Rotor Thickness Variation</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Specifications:</h3>
                        <div>
                            <ul>
                                <li>Software: ProLINK</li>
                                <li>Motor Size: 5.6 Kw AC</li>
                                <li>Speed Range: 2 to 1750 rpm (VFD)</li>
                                <li>Torque Measurement: 20 Nm, +/- 0.02 Nm</li>
                                <li>Maximum Brake Pressure: 138 bar</li>
                                <li>Fluid Displacement: 32.6 cc  (2 Gear Type units, 1 per side)</li>
                                <li>Rotating Temperature Measurement: Infrared pyrometer (4 units, 1 per rotor face)</li>
                            </ul>
                            <ul>
                                <li>Non-Contact Rotor Thickness Variation Measurement: 6 channels</li>
                                <li>Sample Rate: Up to 5,000 samples/sec</li>
                                <li>Maximum Rotor Diameter: 480 mm</li>
                                <li>Maximum Tailstock Daylight: 390 mm (Manual adjustment)</li>
                                <li>Machine Size: 2717.8 mm x 977.9 mm</li>
                            </ul>
                        </div>
                        <br />    
                        <h3>Test Procedures:</h3>
                        <div>
                            <ul>
                                <li>Residual Drag</li>
                                <li>Adjust lateral run-out to required specifications</li>
                            </ul>
                            <ul>
                                <li>Measure pressure, torque, speed, temperature, fluid displacement, Rotor Thickness Variation and rotor position</li>
                            </ul>
                        </div>
                    </div>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model3016/M-3016RDM1.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model3016/M-3016RDM1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model3016/M-3016RDM2.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model3016/M-3016RDM2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model3016/M-3016RDM3.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model3016/M-3016RDM3.jpg"/>,
                    }
                ]               
            },
            model3070VehicleDTVandDragTester: {
                subSection: "Brakes",
                brakesSubSection: "Test Stands •",
                title : "Model 3070 Vehicle DTV &amp; Drag Tester",
                body :
                <div>
                    <p>The Model 3070 Vehicle DTV &amp; Drag test system provides operators the ability to measure the inboard and outboard run-out, as well as, the Disc Thickness Variation (DTV) of a disc brake rotor on-the vehicle. The system can also measure both rolling and break-away torque.</p>
                    <div className="list-table">
                        <br />    
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Measures inboard and outboard run-out, and Disc Thickness Variation (DTV) of a rotor on the vehicle</li>
                            </ul>
                            <ul>
                                <li>Provides the capabilities of measuring both rolling and break-away torque</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Specifications:</h3>
                        <div>
                            <ul>
                                <li>Control System: ProLINK</li>
                                <li>Electrical: 120/240 VAC, 50/60Hz</li>
                                <li>Motor Speed: 0 - 5 RPM continuous</li>
                                <li>Drive Motor Torque: 0 - 85 Nm continuous, +/- 0.15% full scale</li>
                                <li>Probe Range: 2.54 mm,  +/- 0.25% FS</li>
                                <li>Operating Temperature: 0&deg; to 30&deg;C</li>
                            </ul>
                            <ul>
                                <li>Probe Type: 4 capacitive, non-contact w/ 90&deg; quick disconnect cable</li>
                                <li>Wheel Drive Adapter: Adjustable to fit 3, 4 or 5 lug patterns</li>
                                <li>Wheel Position Encoder: 1024 ppr</li>
                                <li>Alignment Laser: Vertical Line Beam</li>
                                <li>Head Height Range: 1295-1625 mm (ground to center of test head output shaft)</li>
                            </ul>
                        </div>
                        <br />    
                        <h3>Test Procedures:</h3> 
                        <div>
                            <ul>
                                <li>Measures inboard and outboard run-out of a rotor</li>
                                <li>Measures disc thickness variation (DTV)</li>
                            </ul>
                            <ul>
                                <li>Measures both rolling and break-away torque</li>
                            </ul>
                        </div>
                    </div>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model3070/M-3070VDT1.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model3070/M-3070VDT1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model3070/M-3070VDT2.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model3070/M-3070VDT2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model3070/M-3070VDT3.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model3070/M-3070VDT3.jpg"/>,
                    }
                ]               
            },
            model3315RotorMappingStation: {
                subSection: "Brakes",
                brakesSubSection: "Test Stands •",
                title : "Model 3315 Rotor Mapping Station",
                body :
                <div>
                    <p>The Model 3315 Rotor Mapping Station is a precision system designed to measure Total Indicated Runout (TIR) and Disc Thickness Variation (DTV) of brake rotors. The station utilizes a precision rotary table, in conjunction with non-contact capacitive sensors capable of making very small displacement measurements between the probe face and the electrically conductive brake rotor surface.</p>

                    <div className="specs-table">
                        <br />    
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Measures rotor run-out</li>
                            </ul>
                            <ul>
                                <li>Measures disc thickness variation (DTV)</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Specifications:</h3>
                        <div>
                            <ul>
                                <li>Control System: ProLINK</li>
                                <li>Rotary Table: 254 mm diameter</li>
                                <li>Rotation: 0-360 degrees (continuous)</li>
                                <li>Rate of Travel: 0 to 2 rev/min</li>
                                <li>Incremental Encoder: 1024 counts per revolution</li>
                                <li>"X" Axis Slide: 203 mm travel (Automated)</li>
                            </ul>
                            <ul>
                                <li>"Z" Axis Slide: 203 mm travel (Manual)</li>
                                <li>Number of Probes/Channels: 2</li>
                                <li>Maximum Range: 2.5 mm, +/- 0.0005 mm</li>
                                <li>Sample Rate: 200 samples/Sec</li>
                                <li>Probe Type: Capacitive (non-contact - standard), LVDT (contact - optional)</li>
                                <li>Rotor mounting surface runout: Less than 10 micron</li>
                            </ul>
                        </div>
                    </div>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model3315/M-3315RMS1.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model3315/M-3315RMS1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model3315/M-3315RMS2.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model3315/M-3315RMS2.jpg"/>,
                    }
                ]               
            },
            model3378PortableVehicleDTVandDragTester: {
                subSection: "Brakes",
                brakesSubSection: "Test Stands •",
                title : "Model 3378 Portable Vehicle DTV &amp; Drag Tester",
                body :
                <div>
                <p>The Model 3315 Rotor Mapping Station is a precision system designed to measure Total Indicated Runout (TIR) and Disc Thickness Variation (DTV) of brake rotors. The station utilizes a precision rotary table, in conjunction with non-contact capacitive sensors capable of making very small displacement measurements between the probe face and the electrically conductive brake rotor surface.</p>

                <div className="list-table">
                    <br />    
                    <h3>Applications:</h3> 
                    <div>
                        <ul>
                            <li>Measures rotor run-out</li>
                        </ul>
                        <ul>
                            <li>Measures disc thickness variation (DTV)</li>
                        </ul>
                    </div>
                    <br />
                    <h3>Specifications:</h3>
                    <div>
                        <ul>
                            <li>Control System: ProLINK</li>
                            <li>Rotary Table: 254 mm diameter</li>
                            <li>Rotation: 0-360 degrees (continuous)</li>
                            <li>Rate of Travel: 0 to 2 rev/min</li>
                            <li>Incremental Encoder: 1024 counts per revolution</li>
                            <li>"X" Axis Slide: 203 mm travel (Automated)</li>
                            <li>Rotor mounting surface runout: Less than 10 micron</li>
                        </ul>
                        <ul>
                            <li>"Z" Axis Slide: 203 mm travel (Manual)</li>
                            <li>Number of Probes/Channels: 2</li>
                            <li>Maximum Range: 2.5 mm, +/- 0.0005 mm</li>
                            <li>Sample Rate: 200 samples/Sec</li>
                            <li>Probe Type: Capacitive (non-contact - standard), LVDT (contact - optional)</li>
                            
                        </ul>
                    </div>
                </div>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model3378/M-3378P1.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model3378/M-3378P1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model3378/M-3378P2.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model3378/M-3378P2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model3378/M-3378P3.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model3378/M-3378P3.jpg"/>,
                    }
                ]               
            },
            model3394NVHMasterCylinderTestStand: {
                subSection: "Brakes",
                brakesSubSection: "Test Stands •",
                title : "Model 3394 NVH Master Cylinder Test Stand",
                body :
                <div>
                    <p>The Model 3394 NVH Master Cylinder Test Stand evaluates performance and Noise, Vibration and Harshness (NVH) of brake vacuum boosters and master cylinder systems. These tests are performed by applying servo-controlled stroke or force control, via a linear actuator, to the brake booster, simulating service conditions. Pumps simulate engine vacuum and perform automatic evacuation and fill of brake fluid. Disc springs simulate the brake caliper reaction force. Transducers measure displacement, stroke, pressure and load, of the brake system. A semi-anechoic chamber, microphones and Link custom software facilitate noise analysis.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Vacuum booster and master cylinder performance</li>
                        <li>NVH and Noise characteristics</li>
                        <li>Measurement of Displacement, Pressure and Load</li>
                    </ul>
                    <br />
                    <h3>Standand Specifications:</h3>
                    <ul>
                        <li>Fluid Displacement: Flow Meter 0.2 to 160 cc / sec (98 cc max)</li>
                        <li>Pressure: 200 Bar Max, +/- 0.1% FS</li>
                        <li>Stroke: 500 mm Maximum at +/-0.1 to 220 mm / sec</li>
                        <li>Force: 10,000 N Maximum at 5 to 500 N / sec</li>
                        <li>Data Channels: 64 at 2,000 Hz (per channel)</li>
                        <li>Electrical Supply: 30 A / 480 V / 3ph</li>
                        <li>Pneumatic Supply: 6 Bar</li>
                    </ul>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model3394/M-3394NVH1.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model3394/M-3394NVH1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model3394/M-3394NVH2.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model3394/M-3394NVH2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model3394/M-3394NVH3.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model3394/M-3394NVH3.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model3394/M-3394NVH4.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model3394/M-3394NVH4.jpg"/>,
                    }
                ]               
            },
            shapix1500: {
                subSection: "Brakes",
                brakesSubSection: "Test Stands •",
                title : "Shapix 1500",
                body :
                <div>
                    <p>The ShaPix 1500 System measures the profile, flatness and waviness of planar surfaces. The compact sensor design provides flexibility for specific mechanical configurations to meet particular application needs at an affordable price. The ShaPix is now available with a fully automated table to support the rotor or brake pad for inspection of thickness, Lateral Run Out, Disc Thickness Variation, and other automated dimensional measurements.<br /><br />This technology produces measurements in easy to understand, high-definition 3D picture format within minutes. The micron level visualizations produced by ShaPix enables clear understanding and communication of changes in a planar surface during testing.</p>

                    <div className="list-table">
                        <br />    
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Flatness &amp; waviness, profile, parallelism</li>
                                <li>Stitching of large surfaces</li>
                                <li>Full 3D analysis &amp; reporting</li>
                                <li>Data export, STL, Databases, CSV</li>
                            </ul>
                            <ul>
                                <li>Multi-surface relationship</li>
                                <li>Virtual gasket</li>
                                <li>Thickness uniformity</li>
                                <li>ROIs, zones, sectional plots</li>
                                <li>Gap analysis</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Specifications:</h3>
                        <div>
                            <ul>
                                <li>Ambient operating temperature: 18 – 25 degrees C</li>
                                <li>Rate of temperature change: &lt; 1 degrees C within last 10 minutes &lt; 6 degrees C within last 1 hour</li>
                                <li>Humidity: 12% – 80% non-condensing Class 1 Laser Product</li>
                            </ul>
                            <ul>
                                <li>Working range from sensor: 25 – 250 mm</li>
                                <li>Lateral resolution: 80 &#230;m</li>
                                <li>Field of view (LxWxH): 150 x 150 x 225 mm</li>
                                <li>Vertical resolution: 0.05 &#230;m</li>
                            </ul>
                        </div>
                    </div>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Shapix1500/Shapix15001.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Shapix1500/Shapix15001.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Shapix1500/Shapix15002.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Shapix1500/Shapix15002.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Shapix1500/Shapix15003.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Shapix1500/Shapix15003.jpg"/>,
                    },
                ]               
            },
            absExpertHeavyDutyBrakeDiagnosticTool: {
                subSection: "Brakes",
                brakesSubSection: "Test Stands •",
                title : "ABS Expert Heavy-Duty Vehicle Brake Diagnostic Tool",
                body :
                <div>
                    <p>The ABS Expert Test System provides a simple and cost-effective computer-based diagnostic tool for testing heavy vehicle Antilock Braking Systems (ABS), including hydraulics. The system tests wheel speed sensors, ABS valves, ATC valves, retarder control, warning lights, and other components. Its unique design eliminates the need for multiple cartridges, cables and programs for different brands of ABS. Trailer diagnostics can also be performed with the use of the optional 7-way connector. ABS Expert is available as a complete system or as software only.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Heavy Vehicles</li>
                    </ul>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Simple to use</li>
                        <li>Affordable price</li>
                        <li>Portable</li>
                        <li>Tests systems made by various manufacturers</li>
                    </ul>
                    <br />
                    <h3>Software:</h3>
                    <ul>
                        <li>Software: ABS-Expert&trade; CD</li>
                        <li>Computer cables: Two cables with 6 &amp; 9 pin Deutsch connectors, WABCO TCS-1 trailer cable, 7-way trailer cable (optional)</li>
                        <li>Accessory: Converter box</li>
                    </ul>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/ABSExpertHeavy/ABSExpert1.jpg",
                        media: <img src="/images/Brakes/Test_Stands/ABSExpertHeavy/ABSExpert1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/ABSExpertHeavy/ABSExpert2.jpg",
                        media: <img src="/images/Brakes/Test_Stands/ABSExpertHeavy/ABSExpert2.jpg"/>,
                    },
                ]               
            },
            airSystemExpert: {
                subSection: "Brakes",
                brakesSubSection: "Test Stands •",
                title : "Air System Expert",
                body :
                <div>
                    <p>The Link Air System Expert is a complete, portable, computer-based system that makes it easy to verify FMVSS/CMVSS 121 air system compliance. A precision accelerometer is used to indicate first pedal movement. A laptop computer, pressure transducers, digital gage and a rugged travel case are included.</p>

                    <div className="list-table">
                        <br/>    
                        <h3>APPLICATIONS:</h3> 
                        <div>
                            <ul>
                                <li>Air-Braked vehicles</li>
                                <li>Service brake apply and release</li>
                                <li>Park brake apply</li>
                            </ul>
                            <ul>
                                <li>Compressor build up, cut-in and cut-out</li>
                                <li>Pressure differential</li>
                                <li>Brake light switch activation</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Key Benefits:</h3>
                        <div>
                            <ul>
                                <li>Measures leak down</li>
                                <li>Performs pressure balance</li>
                                <li>Data acquisition mode diagnoses the air system</li>
                            </ul>
                            <ul>
                                <li>ABS system diagnostics (optional)</li>
                                <li>Light function (optional)</li>
                            </ul>
                        </div>
                        <br />    
                        <h3>Specifications:</h3> 
                        <div>
                            <ul>
                                <li>Number Channels: 2 to 12</li>
                                <li>Pressure Transducer: 0 to 34 Bar &plusmn; 0.25%, -40 to 125&deg; C</li>
                            </ul>
                            <ul>
                                <li>Data Acquisition: USB 2, 300 samples/sec</li>
                                <li>Digital Gage: 0 to 345 Bar &plusmn; 0.25%, -40 to 60&deg; C</li>
                            </ul>
                        </div>
                    </div>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/AirSystemExpert/AirSystemExpert1.jpg",
                        media: <img src="/images/Brakes/Test_Stands/AirSystemExpert/AirSystemExpert1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/AirSystemExpert/AirSystemExpert2.jpg",
                        media: <img src="/images/Brakes/Test_Stands/AirSystemExpert/AirSystemExpert2.jpg"/>,
                    },
                ]               
            },
            brakeShimDampingTestStand: {
                subSection: "Brakes",
                brakesSubSection: "Test Stands •",
                title : "Brake Shim Damping Test Stand",
                body :
                <div>
                    <p>The Brake Shim Damping Test Stand determines the damping characteristics of shim materials. A shim is attached to a standard metal plate with an elastomer and excited by a modal hammer. The Eigenfrequencies and dampings are measured with a Laser-Doppler-Vibrometer over a temperature range from -30&deg; to +140&deg; C, in steps of 2&deg; C, with a non-contact thermal sensor, and then a map of the results is produced.</p>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Highly efficient and time saving</li>
                        <li>Shim database stores damping as a function of frequency and temperature</li>
                    </ul>
                    <br />
                    <h3>Standard Specifications:</h3>
                    <ul>
                        <li>Frequency range: up to 20 kHz</li>
                        <li>Frequency resolution: &lt;5 Hz</li>
                    </ul>
                    <br />
                    <h3>Test Procedures:</h3>
                    <ul>
                        <li>Shim Testing</li>
                    </ul>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/BrakeShim/BrakeShim1.jpg",
                        media: <img src="/images/Brakes/Test_Stands/BrakeShim/BrakeShim1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/BrakeShim/BrakeShim2.jpg",
                        media: <img src="/images/Brakes/Test_Stands/BrakeShim/BrakeShim2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/BrakeShim/BrakeShim3.jpg",
                        media: <img src="/images/Brakes/Test_Stands/BrakeShim/BrakeShim3.jpg"/>,
                    }
                ]               
            },
            bm14200RollerBrakeTester: {
                subSection: "Brakes",
                brakesSubSection: "Test Stands •",
                title : "BM 14200 Roller Brake Tester",
                body :
                <div>
                <p>The BM 14200 Roller Brake tester (also known as a Performance-Based Brake Tester or PBBT) uses two large rollers and one small center roller, one meter wide, on each wheel, to test vehicles with axle loads up to 20,000 kg. Optional wider rollers and the split sub frame design allow the user to customize the track width range during installation, allowing for a wide range of wheel tracks. A rugged aluminum enclosure houses large and easy-to-read analog and digital displays of relevant test data.</p>

                <div className="list-table">
                    <br />    
                    <h3>Applications:</h3>
                    <div>
                        <ul>
                            <li>Passenger cars to heavy trucks</li>
                            <li>Vehicle inspection centers</li>
                        </ul>
                        <ul>
                            <li>Repair shops</li>
                        </ul>
                    </div>
                    <br />
                    <h3>Key Benefits:</h3>
                    <div>
                        <ul>
                            <li>Large chain wheels minimize chain adjustments</li>
                            <li>Large middle roller improves damping</li>
                            <li>Heavy duty bearings for durability</li>
                        </ul>
                        <ul>
                            <li>High quality weight transducers</li>
                            <li>High strength roller axles</li>
                        </ul>
                    </div>
                    <br />
                    <h3>Specifications:</h3>
                    <div>
                        <ul>
                            <li>Rollerbeds (two): 910 mm L x 1285 mm W x 622 mm H</li>
                            <li>Rollers: 4 Main 260 mm dia, 2 Center 80 mm dia, 1000 mm wide (std)</li>
                            <li>Roller height above floor: 25 mm front, 70 mm rear</li>
                            <li>Friction coefficient of roller: Min 0.7 dry, 0.6 wet</li>
                            <li>High strength roller axles</li>
                        </ul>
                        <ul>    
                            <li>Maximum test axle weight: 16000 kg (std), 20000 kg (optional)</li>
                            <li>Gear motor: 11 kW</li>
                            <li>Brake force: 0 to 3600 daN</li>
                            <li>Test speed: 2.7 km/h</li>
                            <li>Operating temperature: –15&deg; C to + 50&deg; C</li>
                        </ul>
                    </div>
                </div>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/BM14200/BM14200RBT1.jpg",
                        media: <img src="/images/Brakes/Test_Stands/BM14200/BM14200RBT1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/BM14200/BM14200RBT2.jpg",
                        media: <img src="/images/Brakes/Test_Stands/BM14200/BM14200RBT2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/BM14200/BM14200RBT3.jpg",
                        media: <img src="/images/Brakes/Test_Stands/BM14200/BM14200RBT3.jpg"/>,
                    }
                ]               
            },
            model20200RollerBrakeTester: {
                subSection: "Brakes",
                brakesSubSection: "Test Stands •",
                title : "Model 20200 Roller Brake Tester",
                body :
                <div>
                    <p>The LINK Model 20200 Roller Brake Tester is only 152 mm high above the rollers and can be placed on a garage floor or in a parking lot without a special foundation or pit. Brake forces at each wheel are measured with strain-gage type transducers. Additional sensors are available to measure air pressure, pedal force, and axle weight. The ramps quickly fold up so that one person can easily roll it out of the way. Six large rubber feet are adjustable for uneven surfaces and prevent tester movement.</p>

                    <div className="list-table">
                        <br />    
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Heavy Vehicles</li>
                                <li>Automatically tests ABS and ATC</li>
                                <li>Rolling Resistance - dragging brakes or wheel bearings</li>
                            </ul>
                            <ul>
                                <li>Brake Threshold Pressure - all brakes starting at the same pressure</li>
                                <li>Service Brake Force – proper brake function</li>
                                <li>Parking Brake Force - bad springs or valves</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Key Benefits:</h3>
                        <div>
                            <ul>
                                <li>Simple setup</li>
                                <li>One person operation without special skills</li>
                            </ul>
                            <ul>
                                <li>Check all brakes on a five-axle tractor trailer in under 10 minutes</li>
                            </ul>
                        </div>
                        <br />    
                        <h3>Specifications:</h3>
                        <div>
                            <ul>
                                <li>Rollers: 150 mm diameter</li>
                                <li>Vehicle Weight: 1,360 kg</li>
                                <li>Roller Speed; 1.0 to 2.5 kph</li>
                            </ul>
                            <ul>
                                <li>Axle Load: 15,000 kg</li>
                                <li>Force: 32,000 N (at ea. brake)</li>
                                <li>Gear motors (2): 3.7 to 11.2 kW</li>
                            </ul>
                        </div>
                    </div>                             
                </div>,
                items : [
                    {
                        media :     
                        <Player
                            preload={"auto"}
                            playsInline
                            fluid={false}
                            autoPlay={true}
                            // poster="images/_assets/poster.png"
                            src="/images/Brakes/Test_Stands/Model20200/M-20200Video.mp4"
                        >
                            <BigPlayButton position="center" />
                        </Player>,
                        backgroundImage : "/images/flat_icons/playThumb.jpg"
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model20200/M-20200RBT1.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model20200/M-20200RBT1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model20200/M-20200RBT2.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model20200/M-20200RBT2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model20200/M-20200RBT3.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model20200/M-20200RBT3.jpg"/>,
                    }
                ]               
            },
            bm3010MobileBrakeTester: {
                subSection: "Brakes",
                brakesSubSection: "Test Stands •",
                title : "BM 3010 Mobile Brake Tester",
                body :
                <div>
                <p>The LINK BM 3010 is an  above ground/mobile brake tester for light vehicles with axle loads up to 3500 kg and a wide range of wheel tracks. An aluminum enclosure houses large and easy-to-read analog and digital displays of relevant test data. The brake tester roller set is hot-galvanized, and can be installed either inside or outdoors.</p>

                <div className="list-table">
                    <br />    
                    <h3>Applications:</h3>
                    <div>
                        <ul>
                            <li>Passenger Cars, Light Trucks and Motorcycles</li>
                        </ul>
                        <ul>
                            <li>Service and parking brakes</li>
                        </ul>
                    </div>
                    <br />
                    <h3>Key Benefits:</h3>
                    <div>
                        <ul>
                            <li>Simple setup and one handed operation</li>
                            <li>Proven maintenance-free design</li>
                            <li>Detects dragging brakes</li>
                            <li>Determines if all brakes start working at the same pedal force</li>
                        </ul>
                        <ul>
                            <li>Checks if brakes are functioning properly</li>
                            <li>Finds parking system defects</li>
                            <li>Identifies run out and rotor thickness/force variation as the brake rotates</li>
                        </ul>
                    </div>
                    <br />    
                    <h3>Specifications:</h3>
                    <div>
                        <ul>
                            <li>Roller diameter / length: 150 mm / 700 to 1000 mm</li>
                            <li>Roller friction coefficient: 0.7 dry, 0.6 wet</li>
                            <li>Wheel track: 850 to 2250 mm</li>
                            <li>Maximum test axle weight: 3500 kg</li>
                            <li>Gear motor: 1.1 kW</li>
                            <li>Brake force: 0-100 daN +2daN, 100-700 daN: &plusmn; 2% FS</li>
                        </ul>
                        <ul>
                            <li>Test speed: 2.0 km/h</li>
                            <li>Display: 735mm L x 500 mm W x 140 mm H</li>
                            <li>Weight measurement: 0-100 kg: &plusmn; 2 kg, &gt; 100 kg &plusmn; 2 % FS</li>
                            <li>Pedal force measurement: 0-99 daN  &plusmn; 1 daN</li>
                            <li>Power: 3ph, 400 VAC</li>
                        </ul>
                    </div>
                </div>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/BM3010/BM3010.jpg",
                        media: <img src="/images/Brakes/Test_Stands/BM3010/BM3010.jpg"/>,
                    },
                ]               
            },
            model100FastMachine: {
                subSection: "Brakes",
                brakesSubSection: "Test Stands •",
                title : "Model 100 FAST Machine",
                body :
                <div>
                    <p>The Model 100 Friction Assessment and Screening Test (FAST) Machine provides a sensitive and reproducible characterization test for friction material specimens used in the development of Brake &amp; Clutch Linings. Design simplicity makes the FAST Machine a viable friction and wear tester for brake lining and clutch facing test specimens.<br /><br />The machine operates in either constant clamping or friction force modes, using a constant rubbing speed. The constant friction force mode also provides a reproducible temperature-time history for the sample.</p>

                    <list className="list-table">
                        <br />    
                        <h3>Key Benefits:</h3> 
                        <div>
                            <ul>
                                <li>Friction and wear properties from sample to sample may be directly compared</li>
                            </ul>
                            <ul>
                                <li>Ideal for quality control and product development applications</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Specifications:</h3>
                        <div>
                            <ul>
                                <li>Pump Pressure (Sustained): 11 Bar</li>
                                <li>Clamping Pressure Limit:  <br />700 N</li>
                                
                            </ul>
                            <ul>
                                <li>Normal Rubbing Speed: 7 m/s</li>
                                <li>Maximum Friction: Force 7</li>
                                <li>Motor: .76 Kw</li>
                            </ul>
                        </div>
                        <br />    
                        <h3>Test Procedures:</h3>
                        <div>
                            <ul>
                                <li>Quality assurance of drum brake segments, disc brake pads, truck brake blocks, and clutch facings</li>
                            </ul>
                            <ul>
                                <li>Friction &amp; Wear</li>
                                <li>Static friction</li>
                                <li>Friction versus load</li>
                            </ul>
                        </div>
                    </list>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model-100/Model100FM1.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model-100/Model100FM1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model-100/Model100FM2.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model-100/Model100FM2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model-100/Model100FM3.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model-100/Model100FM3.jpg"/>,
                    }
                ]               
            },
            RWS100B: {
                subSection: "Brakes",
                brakesSubSection: "Test Stands •",
                title : "The Krauss machine (RWS100B)",
                body :
                <div>
                    <p>The Krauss machine (RWS100B) is designed and engineered exclusively for quality control (QC) of
                    friction material. It can also be used as an additional tool in R&D to measure the friction values, verifythe temperature behavior and determine the wear at the following material, for example full size discbrake pads, full size drum brake lining, clutch material etc.</p>
                    <p>The controls enable close correlation with existing test protocols. The ProLINK software package
                    offers manual operator control, or fully automatic unattended operation. The operator can select test
                    parameters, control modes, display data, monitor test functions and execute desired test sequences.</p>
                    <p>In November 2017, Link Engineering Company acquired the Krauss product line and brand. Going
                    forward, LINK will be offering the Krauss product line of test equipment for friction material
                    performance, quality control, and wear measurement. As an industry leader in brake testing and support, LINK’s knowledge and experience will be leveraged to move the Krauss product line forward.</p>
                    <br />
                    <h3>Main Subsystems</h3>
                    <ul>
                        <li>75 kW AC – main drive motor with gearbox</li>
                        <li>Frequency resolution: &lt;5 Hz</li>
                        <li>zFixed speed at 660 rpm</li>
                        <li>Slipring device for two rotating thermocouples</li>
                        <li>Cooling air system</li>
                        <li>Air/Brake fluid apply system</li>
                        <li>Load cell/arm torque measurement system</li>
                        <li>Control console</li>
                        <li>Tailstock</li>
                    </ul>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/RWS100B/RWS100B1.jpg",
                        media: <img src="/images/Brakes/Test_Stands/RWS100B/RWS100B1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/RWS100B/RWS100B2.jpg",
                        media: <img src="/images/Brakes/Test_Stands/RWS100B/RWS100B2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/RWS100B/RWS100B3.jpg",
                        media: <img src="/images/Brakes/Test_Stands/RWS100B/RWS100B3.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/RWS100B/RWS100B4.jpg",
                        media: <img src="/images/Brakes/Test_Stands/RWS100B/RWS100B4.jpg"/>,
                    }
                ]               
            },
            model2552BoosterTestStand: {
                subSection: "Brakes",
                brakesSubSection: "Test Stands •",
                title : "Model 2552 Booster Test Stand",
                body :
                <div>
                    <p>The Model 2552 Booster Test Stand is specifically configured to evacuate and fill the brake system with fluid and measure displacement. Tests are performed by applying pressure to the brake booster and measuring fluid displacement and movement of the mechanical components. This versatile test system is constructed of stainless steel, with a nickel-plated T-Slot base, so a variety of test parts and brake apply mechanisms can be mounted on the bench top to simulate real-life installations.</p>

                    <div className="list-table">
                        <br />    
                        <h3>Key Benefits:</h3>
                        <div>
                            <ul>
                                <li>Durable stainless steel bench</li>
                                <li>T-Slot base for easy fixture setup</li>
                                <li>Automatic brake fluid evacuation and fill</li>
                                <li>Generic tooling allows a wide array of test procedures</li>
                                <li>Linear actuator for force or stroke application</li>
                            </ul>
                            <ul>
                                <li>LINK Brake Apply System</li>
                                <li>Panel mounted gauges for high visibility</li>
                                <li>Panel mounted supply connections</li>
                                <li>PC based control console with ProLINK control software</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Standard Specifications:</h3>
                        <div>
                            <ul>
                                <li>Fluid Displacement: 98 cc</li>
                                <li>Flow Meter: 0.2 cc/sec to 160 cc/sec</li>
                                <li>Maximum Pressure: 200 Bar</li>
                                <li>Maximum Stroke: 25 mm</li>
                            </ul>
                            <ul>
                                <li>Stroke Speed: 0.1 to 220 mm/sec</li>
                                <li>Maximum Force: 1000 N</li>
                                <li>Force Ramp Rate: 5 to 500 N/sec</li>
                            </ul>
                        </div>
                        <br />    
                        <h3>Test Procedures:</h3> 
                        <div>
                            <ul>
                                <li>Performance and durability testing of automotive brake boosters</li>
                            </ul>
                        </div>
                    </div>                              
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model2552/M-2552BTS1.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model2552/M-2552BTS1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Test_Stands/Model2552/M-2552BTS2.jpg",
                        media: <img src="/images/Brakes/Test_Stands/Model2552/M-2552BTS2.jpg"/>,
                    },
                ]               
            },
            /* Sub Systems */
            model3945RoadLoadSimulationSystem: {
                subSection: "Brakes",
                brakesSubSection: "Sub Systems •",
                title : "Model 3945 Road Load Simulation System",
                body :
                <div>
                    <p>The Model 3945 Road Load Simulation System replicates road loads for brake tests. The system has the flexibility to impose fixed or dynamic loading during noise, judder, DTV, and wear investigations. This gives a realistic representation of what happens on a vehicle and enables the precise detection of brake noise caused by steering input. It also creates a more accurate reproduction of DTV generation. This system is an add-on to the LINK Model 3900 Dynamometer.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Reproduce loading for passenger vehicle and light truck applications</li>
                        <li>Replicates actual radial and axial road load inputs seen by the corner module during real life driving as a result of road inputs and steering</li>
                        <li>Replicates vehicle weight, dynamic weight transfer from braking, vehicle cornering, and road load roughness and vibration</li>
                    </ul>
                    <br />
                    <h3>Standard Specifications:</h3>
                    <ul>
                        <li>Maximum Radial Load: 25 kN (5620 lbs)</li>
                        <li>Maximum Lateral Load: +/- 17.5 kN (3934 lbs)</li>
                        <li>Lateral Load Rolling Radius Range: 2301 mm to 380 mm (10.63 in to 15.0 in)</li>
                    </ul>
                    <br />
                    <h3>Test Procedures:</h3>
                    <ul>
                        <li>SAE J2521</li>
                    </ul>                              
                </div>,
                items : [
                    {
                        media :     
                        <Player
                            preload={"auto"}
                            playsInline
                            fluid={false}
                            autoPlay={true}
                            // poster="images/_assets/poster.png"
                            src="/images/Brakes/Sub_Systems/Model3945RoadLoadSimulation/M-3945Video.mp4"
                        >
                            <BigPlayButton position="center" />
                        </Player>,
                        backgroundImage : "/images/flat_icons/playThumb.jpg"
                    },
                    {
                        backgroundImage: "/images/Brakes/Sub_Systems/Model3945RoadLoadSimulation/M-3945RLS1.jpg",
                        media: <img src="/images/Brakes/Sub_Systems/Model3945RoadLoadSimulation/M-3945RLS1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Sub_Systems/Model3945RoadLoadSimulation/M-3945RLS2.jpg",
                        media: <img src="/images/Brakes/Sub_Systems/Model3945RoadLoadSimulation/M-3945RLS2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Sub_Systems/Model3945RoadLoadSimulation/M-3945RLS3.jpg",
                        media: <img src="/images/Brakes/Sub_Systems/Model3945RoadLoadSimulation/M-3945RLS3.jpg"/>,
                    }
                ]               
            },
            model2864PassiveRoadWheel: {
                subSection: "Brakes",
                brakesSubSection: "Sub Systems •",
                title : "Model 2864 Passive Road Wheel",
                body :
                <div>
                    <p>In some cases, it is necessary or desirable to have a better representation of the entire rolling vehicle corner assembly for brake NVH testing. For brake noise frequencies below 2000 Hz, having the complete rolling assembly can create a better replication of the on-vehicle brake noise.<br /><br />The Model 2864 Passive Road Wheel is a freestanding system that incorporates a static loading mechanism that pivots the wheel assembly to provide the desired tire radial load. The vehicle corner suspension can then be used in an unmodified state with the assurance of proper loading and loaded geometry for the test.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                    <br />
                    <li>Brake NVH testing</li>
                    </ul>
                    <br />
                    <h3>Standand Specifications:</h3>
                    <ul>
                        <li>Actuation: Driven by Tire</li>
                        <li>Roll Diameter: 762 mm (30 in)</li>
                        <li>Roll Width: 300 mm (11.81 in)</li>
                        <li>Height Adjustment Range: 81 mm (3.19 in)</li>
                        <li>Height Adjustment Control: Manual</li>
                        <li>Load Capacity: 1363 kg (3000 lbs)</li>
                    </ul>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Sub_Systems/Model2864PassiveRoadWheel/M-2864PRW1.jpg",
                        media: <img src="/images/Brakes/Sub_Systems/Model2864PassiveRoadWheel/M-2864PRW1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Sub_Systems/Model2864PassiveRoadWheel/M-2864PRW2.jpg",
                        media: <img src="/images/Brakes/Sub_Systems/Model2864PassiveRoadWheel/M-2864PRW2.jpg"/>,
                    },
                ]               
            },
            model5002ResidualDragTailstock: {
                subSection: "Brakes",
                brakesSubSection: "Sub Systems •",
                title : "Model 5002 Residual Drag Tailstock",
                body :
                <div>
                    <p>The Model 5002 provides the capacity to measure full scale stops with the added benefit of measuring residual drag at the most accurate levels available in the industry. The tailstock can measure both drag and full scale torque during a single test. This pneumatic bearing design utilizes mechanical locks which isolate the drag torque sensor during dynamic stops.<br /><br />The subsystem is available to purchase for use with a LINK inertia brake dynamometer or as an upgrade to many existing LINK performance dynamometers.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Measures brake-on torque</li>
                        <li>Measure brake-off torque</li>
                    </ul>
                    <br />
                    <h3>Standand Specifications:</h3>
                    <ul>
                        <li>Drag Torque Full Scale: 70 N&middot;m (620 in&middot;lb)</li>
                        <li>System Measurement Accuracy: +/- 0.07 N&middot;m (+/- 0.1 % FS)</li>
                        <li>Maximum Tailstock Torque: 5650 N&middot;m (50,000 in&middot;lb)</li>
                        <li>Tailstock Temperature Operating Range: 5 &deg;C to 40 &deg;C (41 &deg;F to 104 &deg;F)</li>
                    </ul>                              
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Brakes/Sub_Systems/Model5002ResidualDragTailstock/M-5002RDT1.jpg",
                        media: <img src="/images/Brakes/Sub_Systems/Model5002ResidualDragTailstock/M-5002RDT1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Sub_Systems/Model5002ResidualDragTailstock/M-5002RDT2.jpg",
                        media: <img src="/images/Brakes/Sub_Systems/Model5002ResidualDragTailstock/M-5002RDT2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Brakes/Sub_Systems/Model5002ResidualDragTailstock/M-5002RDT3.jpg",
                        media: <img src="/images/Brakes/Sub_Systems/Model5002ResidualDragTailstock/M-5002RDT3.jpg"/>,
                    }
                ]               
            },
            
        }        
    ]
}

export default BrakesSubMenuData;
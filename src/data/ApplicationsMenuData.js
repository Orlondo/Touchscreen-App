import React from 'react';
import { Player, BigPlayButton } from 'video-react';
import { URLSearchParams } from 'url';


const ApplicationsMenu = {
    /* Top Menu */
    data : [
        {
            'label' : 'Custom Solutions',
            'backgroundImage' : '/images/applcationMenu/SliderThumbs/CustSol_SliderThumb.jpg',
            'pathname' : 'applications/custom-solutions',
        },
        {
            'label' : 'Control & Acquisition',
            'backgroundImage' : '/images/applcationMenu/SliderThumbs/Control_SliderThumb.jpg',
            'pathname' : 'applications/control&acquisition'
        },
        {
            'label' : 'Brakes',
            'backgroundImage' : '/images/applcationMenu/SliderThumbs/BrakeIcon_SliderThumb.jpg',
            'pathname' : 'applications/brakes-menu'
        },
        {
            'label' : 'Wheel End',
            'backgroundImage' : '/images/applcationMenu/SliderThumbs/WheelEnd_SliderThumb.jpg',
            'pathname' : 'applications/wheel-end'
        },
        {
            'label' : 'Transmission & Driveline',
            'backgroundImage' : '/images/applcationMenu/SliderThumbs/TransIcon_SliderThumb.jpg',
            'pathname' : 'applications/transmission&driveline',
            'classLabel': 'transmision_driveline-container'
        },
        {
            'label' : 'Springs',
            'backgroundImage' : '/images/applcationMenu/SliderThumbs/Spring_SliderThumb.jpg',
            'pathname' : 'applications/springs'
        },
        {
            'label' : 'Servo Dynamics',
            'backgroundImage' : '/images/applcationMenu/SliderThumbs/ServoHyd_SliderThumb.jpg',
            'pathname' : 'applications/servo-dynamics',
            'classLabel': 'servo-dynamics-container'
        }
    ],
    /* Title and Descriptions for main section */
    headerContent : [
        {
            custom_solutions : {
                title : 'Custom Solutions',
                body : 'Custom Solutions is the heart of Link Engineering. We specialize in designing and manufacturing test equipment and test systems that meet specific customer requirements. Our engineers are uniquely positioned to develop the most innovative testing solutions because LINK doesn’t just manufacture testing solutions, we operate our systems at LINK testing laboratories all over the world. By operating global testing facilities, we face the same challenges you face, and by keeping all engineering and manufacturing under our own roof, we’ve been delivering the most efficient, creative solutions for over 80 years.'
            },
            control_and_acquisition : {
                title : 'Control & Acquisition',
                body : 'Link Engineering manufactures both the hardware and the software used to automate testing systems, measure data signals, and acquire data during testing. Our ProLINK controls are powerful and robust, yet extremely user-friendly. We’ve done the programming for you, so you can analyze your data and create a virtually unlimited variety of custom reports, just through simple menu selections. LINK equipment and software delivers data that is accurate, reliable, technical and timely. It’s all about actionable results, and data that you can trust.'
            },
            brakes : {
                title : 'Brakes',
                body : 'As a multi-faceted engineering developer and comprehensive manufacturer, LINK is able to provide fully integrated test systems for the evaluation of brake and friction material. LINK works with all aspects of braking systems including boosters, master cylinders, ABS modules, calipers, rotors, brake pads, steel backs, insulators, friction ingredients, brake drums and assemblies. LINK’s broad array of test systems provides for diverse testing applications including durability, performance, efficiency and NVH. LINK also operates the largest brake laboratory in the world, and is the preferred supplier to most OEMs.'
            },
            wheel_end : {
                title : 'Wheel End',
                body : 'As a gold standard in testing for more than 80 years, LINK has brought hands-on experience and out-of-the-box thinking to new applications of every kind. In tire, wheel, and bearing component development, our innovative methods have transformed how tests are run – increasing speeds, reducing test times, and dramatically shrinking costs. For example, our use of road-load data in the laboratory has already saved OEMs and suppliers millions of dollars. We’ve brought these smarter technologies to our local laboratories around the globe, and we build them into the many system configurations we manufacture. The net result is higher accuracy, increased efficiency, and greater durability – for a better ROI.'
            },
            transmission_and_driveline : {
                title : 'Transmission & Driveline',
                body : 'For more than 80 years, LINK has brought a high level of custom testing, engineering, and support to OEMs and suppliers around the world. LINK’s Transmission and Driveline capabilities range from individual components to full vehicle systems. Evaluating Transmission and Driveline systems presents unique and highly technical challenges. To accurately measure isolated components moving at extreme speeds, in complex mechanical systems, requires ingenious and sophisticated custom solutions. LINK is known for creating the most appropriate solution for your most demanding individual needs.'
            },
            springs : {
                title : 'Springs',
                body : 'LINK’s first manufactured piece of test equipment was a spring tester back in August 1937 and in 1939 LINK was awarded its first patent on a spring tester. Since then, some of those early products are still in use, and we still build the most reliable, long-lasting and resilient spring material testers in the world. Since we’ve made more spring testers than anyone, we know springs better than anyone. So, whatever your application – large or small, compression or tension, manual or automated, standard or custom – we have the smartest spring-testing solution for you. Spring testers are versatile and have been used to test many resilient materials including spring forms, tie rods, door seals, and spring loaded assemblies.'
            },
            servo_hydraulic : {
                title : 'Servo Dynamics',
                body : 'LINK brings innovative, uncompromising testing solutions to Servo Hydraulics. With high standards of performance, safety, and reliability, we have built the most durable, longest-lasting actuators anywhere. LINK is an innovation leader in the design and development of servo hydraulic structural testing systems and components for application in the automotive testing and civil engineering markets. Our servo hydraulic capabilities are wide-reaching and aim to improve the performance, safety, and reliability of our customers’ products. Explore our extensive range of servo hydraulic components and test systems, and see why they have won such a high degree of loyalty and respect.'
            }            
        }   
    ],
    /*** Sub Menus ***/
    customSolutions : [
        {
            'label' : 'Bi-Axial Vibration',
            'backgroundImage' : '/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg',
            'pathname' : '/applications/customSolutions/biAxialVibrations'            
        },
        {
            'label' : 'Exhaust Corrosion Fatigue',
            'backgroundImage' : '/images/Custom_Solutions/ExhaustCorrosionFatigue/ExhaustCorrosionFatigueTester1.jpg',
            'pathname' : '/applications/customSolutions/exhaustCorrosionFatigue'            
        },
        {
            'label' : 'Seat Vibration Tester',
            'backgroundImage' : '/images/Custom_Solutions/SeatVibrationTester/SeatVibrationTester1.jpg',
            'pathname' : '/applications/customSolutions/seatVibrationTester'            
        },
        {
            'label' : 'Steering Assembly Test Stand',
            'backgroundImage' : '/images/Custom_Solutions/SteeringAssemblyTestStand/SATS1.jpg',
            'pathname' : '/applications/customSolutions/steeringAssemblyTestStand'            
        },
        {
            'label' : 'Steering Pump Test System',
            'backgroundImage' : '/images/Custom_Solutions/SteeringPumpTestSystem/SteeringPump1.jpg',
            'pathname' : '/applications/customSolutions/steeringPumpTestSystem'            
        },
        {
            'label' : 'Exciter 3D',
            'backgroundImage' : '/images/Custom_Solutions/Exciter3D/Exciter3D1.jpg',
            'pathname' : '/applications/customSolutions/exciter3d'            
        },
        {
            'label' : 'Ball Joint Boot Test Machine',
            'backgroundImage' : '/images/Custom_Solutions/BallJointBootTestMachine/BallJointBootTestMachine1.jpg',
            'pathname' : '/applications/customSolutions/ballJointBootTestMachine'            
        },
        {
            'label' : 'Bolster Spring QC Test System',
            'backgroundImage' : '/images/Custom_Solutions/BlosterSpringQC/BolsterSpringTestSystem1.jpg',
            'pathname' : '/applications/customSolutions/bolsterSpringQCTestSystem'            
        }
    ],
    controlAndAcquisition : [
        {
            'label' : 'Dyno View',
            'backgroundImage' : '/images/Control_Acquisition/DynoView/DynoView1.jpg',
            'pathname' : '/applications/controlAndAcquisition/dyno_view',            
        },
        {
            'label' : 'M-4275 Ethernet Data Acquisition & Control',
            'backgroundImage' : '/images/Control_Acquisition/M-4275DataAcquisitionControl/M-4275.jpg',
            'pathname' : '/applications/controlAndAcquisition/m-4275_ethernet_data_acquisition_&_control'            
        },
        {
            'label' : 'LabLINK',
            'backgroundImage' : '/images/Control_Acquisition/LabLINK/LabLINK1.jpg',
            'pathname' : '/applications/controlAndAcquisition/LabLINK'            
        },
        {
            'label' : 'LINK Squeal Report Application',
            'backgroundImage' : '/images/Control_Acquisition/LINKSquealReportApplication/LINKSquealReportApplication.jpg',
            'pathname' : '/applications/controlAndAcquisition/LINK_squeal_report_application'            
        },
        {
            'label' : 'V-Max 4000 Data Acquisition System',
            'backgroundImage' : '/images/Control_Acquisition/V-MAX4000/V-Max1.jpg',
            'pathname' : '/applications/controlAndAcquisition/v-max_4000_data_acquisition_system'            
        },
        {
            'label' : 'ProLINK',
            'backgroundImage' : '/images/Control_Acquisition/ProLINK/ProLINK1.jpg',
            'pathname' : '/applications/controlAndAcquisition/proLINK'            
        },
        {
            'label' : 'RegenSIM',
            'backgroundImage' : '/images/Control_Acquisition/RegenSim/RegenSim.jpg',
            'pathname' : '/applications/controlAndAcquisition/regenSIM'            
        },
        {
            'label' : 'RevData Plus',
            'backgroundImage' : '/images/Control_Acquisition/RevdataPlus/RevData1.jpg',
            'pathname' : '/applications/controlAndAcquisition/revdata_plus'            
        },
        {
            'label' : 'Script Edit',
            'backgroundImage' : '/images/Control_Acquisition/ScriptEdit/ScriptEdit1.jpg',
            'pathname' : '/applications/controlAndAcquisition/script_edit'            
        }
    ],
    brakesMenus : [ // Has secondary menu
        {
            'label' : 'Dynamometer',
            'backgroundImage' : '/images/flat_icons/DynoIcon_SliderThumb.jpg',
            'pathname' : '/applications/brakesMenus/dynamometer'            
        },
        {
            'label' : 'Test Stands',
            'backgroundImage' : '/images/flat_icons/TestStand_SliderThumb.jpg',
            'pathname' : '/applications/brakesMenus/test-stands'            
        },
        {
            'label' : 'Sub Systems',
            'backgroundImage' : '/images/flat_icons/SubSys_SliderThumb.jpg',
            'pathname' : '/applications/brakesMenus/sub-systems'            
        },
    ],   
    wheelEnd : [
        {
            'label' : 'Force & Motion Tire Testing System',
            'backgroundImage' : '/images/Wheel_End/Force_MotionTireTestingSystem/Force_Motion1.jpg',
            'pathname' : '/applications/wheelEnd/Force_MotionTireTestingSystem'            
        },
        {
            'label' : 'M-1750 Cornering Fatigue',
            'backgroundImage' : '/images/Wheel_End/M-1750CorneringFatigue/M-1750CorneringFatigue.jpg',
            'pathname' : '/applications/wheelEnd/m-1750_cornering_fatigue'            
        },
        {
            'label' : 'M-2500 Rotary Fatigue',
            'backgroundImage' : '/images/Wheel_End/M-2500RotaryFatigue/M-2500.jpg',
            'pathname' : '/applications/wheelEnd/m-2500_rotary_fatigue'            
        },
        {
            'label' : 'M-2938 Hub Bearing',
            'backgroundImage' : '/images/Wheel_End/M-2938HUB_Bearing/M-2938HUB1.jpg',
            'pathname' : '/applications/wheelEnd/m-2938_hub_bearing'            
        },
        {
            'label' : 'Model 3526 Eccentric Mass Wheel',
            'backgroundImage' : '/images/Wheel_End/Model3526EccentricMass/M-3526EM1.jpg',
            'pathname' : '/applications/wheelEnd/model_3526_eccentric_mass_wheel'            
        },
        {
            'label' : 'M-3546 - Bearing Testing',
            'backgroundImage' : '/images/Wheel_End/M-3546BearingTester/M-3546BearingTester1.jpg',
            'pathname' : '/applications/wheelEnd/m-3546-bearing_testing'            
        },
        {
            'label' : 'M-3830 Radial Fatigue',
            'backgroundImage' : '/images/Wheel_End/Model3830RadialFatigueLoadMachine/M-3830RadialLoadMachine1.jpg',
            'pathname' : '/applications/wheelEnd/m-3830_radial_fatigue'            
        },
        {
            'label' : 'M-3928 Bearing Endurance',
            'backgroundImage' : '/images/Wheel_End/Model3928BearingEnduranceTestMachine/M-3928BETM1.jpg',
            'pathname' : '/applications/wheelEnd/m-3928_bearing_endurance'            
        },
        {
            'label' : 'M-1230 Wheel Impact Tester',
            'backgroundImage' : '/images/Wheel_End/Model1230WheelImpactTester/HammerheadStand1.jpg',
            'pathname' : '/applications/wheelEnd/m-1230_wheel_impact_tester'            
        },
        {
            'label' : 'M-3536 Biaxial Wheel Tester',
            'backgroundImage' : '/images/Wheel_End/Model3536BiaxialWheelTester/Bi-Axial1.jpg',
            'pathname' : '/applications/wheelEnd/m-3536_biaxial_wheel_tester'            
        }
    ],
    transmissionAndDriveline : [
        {
            'label' : 'Axle Test Rig',
            'backgroundImage' : '/images/Transmission_Driveline/AxleTestRig/AxleTestRig1.jpg',
            'pathname' : '/applications/transmissionAndDriveline/axle_test_rig'            
        },
        {
            'label' : 'Ball Joint Boot Test Systems',
            'backgroundImage' : '/images/Transmission_Driveline/BallJointBootTestSystems/BallJointBootTestMachine1.jpg',
            'pathname' : '/applications/transmissionAndDriveline/ball_joint_boot_test_systems'            
        },
        {
            'label' : 'M-1158 To-4 Machine',
            'backgroundImage' : '/images/Transmission_Driveline/M-1158TO-4Machine/M-1158Machine.jpg',
            'pathname' : '/applications/transmissionAndDriveline/m-1158_to-4_machine'            
        },
        {
            'label' : 'M-2190 Auto Trans High Speed',
            'backgroundImage' : '/images/Transmission_Driveline/M-2190AutoTransHighSpeed/M-2190ATHS1.jpg',
            'pathname' : '/applications/transmissionAndDriveline/m-2190_auto_trans_high_speed'            
        },
        {
            'label' : 'M-2909 Manual Clutch Durability',
            'backgroundImage' : '/images/Transmission_Driveline/M-2909ManualClutch/M-2909ClutchDurability1.jpg',
            'pathname' : '/applications/transmissionAndDriveline/m-2909_manual_clutch_durability'            
        },
        {
            'label' : 'M-1850 Six Square Test Stand',
            'backgroundImage' : '/images/Transmission_Driveline/M-1850SixSquareTestStand/M-1850SSTS1.jpg',
            'pathname' : '/applications/transmissionAndDriveline/m-1850_six_square_test_stand'            
        },
        {
            'label' : 'Axle Impact Tester',
            'backgroundImage' : '/images/Transmission_Driveline/AxleImpactTester/AxleImpactTester1.jpg',
            'pathname' : '/applications/transmissionAndDriveline/axle_impact_tester'            
        },
        {
            'label' : 'Two Square',
            'backgroundImage' : '/images/Transmission_Driveline/TwoSquareTimingChainTestSystem/TwoSquareTimingChainTestSystem1.jpg',
            'pathname' : '/applications/transmissionAndDriveline/two_square'            
        },
        {
            'label' : '4-Square Driveline Test System',
            'backgroundImage' : '/images/Transmission_Driveline/Model18004-SquareDrivelineTestSystem/M-1800.jpg',
            'pathname' : '/applications/transmissionAndDriveline/4-Square_driveline_test_system'            
        },
        {
            'label' : 'Transmission Torque Cycling Durability',
            'backgroundImage' : '/images/Transmission_Driveline/Model2090TransmissionTorqueCyclingDurabilityMachine/M-2090.jpg',
            'pathname' : '/applications/transmissionAndDriveline/transmission_torque_cycling_durability'            
        },
        {
            'label' : 'SAE No. 2 Test Stand',
            'backgroundImage' : '/images/Transmission_Driveline/Model3100SAENO2TestStand/M-3100SAENO2TestStand1.jpg',
            'pathname' : '/applications/transmissionAndDriveline/sae_no._2_test_stand'            
        },
        {
            'label' : 'Electric Vehicle Motor & Driveline Test Stand',
            'backgroundImage' : '/images/Transmission_Driveline/Model4298ElectricVehicleMotorDrivelineTestStand/M-4298.jpg',
            'pathname' : '/applications/transmissionAndDriveline/electric_vehicle_motor_&_driveline_test_stand'            
        }
    ],
    spring : [
        {
            'label' : 'Digital SUL Unit',
            'backgroundImage' : '/images/Springs/DigitalSULUnit/DigitalSULUnit1.jpg',
            'pathname' : '/applications/spring/digital_sul_unit'            
        },
        {
            'label' : 'M-EL1 Spring Tester',
            'backgroundImage' : '/images/Springs/M-EL1SpringTester/M-EL1.jpg',
            'pathname' : '/applications/spring/m-el1_spring_tester'            
        },
        {
            'label' : 'M-0873 SUL Master Ring Set',
            'backgroundImage' : '/images/Springs/M-0873SULMasterRingSet/M-0873.jpg',
            'pathname' : '/applications/spring/m-0873_sul_master_ring_set'            
        },
        {
            'label' : 'M-3700 Display Module',
            'backgroundImage' : '/images/Springs/M-3700DisplayModule/M-3700.jpg',
            'pathname' : '/applications/spring/m-3700_display_module'            
        },
        {
            'label' : 'M-T4A Spring Tester',
            'backgroundImage' : '/images/Springs/M-T4ASpringTester/M-T4A.jpg',
            'pathname' : '/applications/spring/m-t4a_spring_tester'            
        },
        {
            'label' : 'M-T4B Spring Tester',
            'backgroundImage' : '/images/Springs/ModelT4BSpringTester/M-T4B.jpg',
            'pathname' : '/applications/spring/m-t4b_spring_tester'            
        },
        {
            'label' : 'M-T4-XY Spring Tester',
            'backgroundImage' : '/images/Springs/ModelT4-XYSpringTester/M-T4-XY1.jpg',
            'pathname' : '/applications/spring/m-t4-xy_spring_tester'            
        }
    ], 
    servoDynamics : [
        {
            'label' : 'Actuators - Linear',
            'backgroundImage' : '/images/Servo_Dynamics/Actuators_Linear/LinearActuator1.jpg',
            'pathname' : '/applications/servoDynamics/actuatorsLinear'            
        },
        {
            'label' : 'Actuators - Rotary',
            'backgroundImage' : '/images/Servo_Dynamics/Actuators_Rotary/RotaryActuator1.jpg',
            'pathname' : '/applications/servoDynamics/actuatorsRotary'            
        },
        {
            'label' : 'Ball Joints',
            'backgroundImage' : '/images/Servo_Dynamics/BallJoints/BallJoint1.jpg',
            'pathname' : '/applications/servoDynamics/ballJoints'            
        },
        {
            'label' : 'Cross Port Bleed Plates',
            'backgroundImage' : '/images/Servo_Dynamics/CrossPortBleedPlates/CrossPortBleedPlates1.jpg',
            'pathname' : '/applications/servoDynamics/crossPortBleedPlates'            
        },
        {
            'label' : '3500 Test Controller',
            'backgroundImage' : '/images/Servo_Dynamics/3500TestController/3500TestController1.jpg',
            'pathname' : '/applications/servoDynamics/3500TestController'            
        },
        {
            'label' : 'Hydraulic Control Manifolds',
            'backgroundImage' : '/images/Servo_Dynamics/HydraulicControlManifolds/HydraulicControlManifold1.jpg',
            'pathname' : '/applications/servoDynamics/hydraulicControlManifolds'            
        },
        {
            'label' : 'Hydraulic Power Supply',
            'backgroundImage' : '/images/Servo_Dynamics/HydraulicPowerSupply/HydraulicPowerSupply1.jpg',
            'pathname' : '/applications/servoDynamics/hydraulicPowerSupply'            
        },
        {
            'label' : 'Load Calibration Stand',
            'backgroundImage' : '/images/Servo_Dynamics/LoadCalibrationStand/LoadCalibrationStand1.jpg',
            'pathname' : '/applications/servoDynamics/loadCalibrationStand'            
        },
        {
            'label' : 'Spiral Washers',
            'backgroundImage' : '/images/Servo_Dynamics/SpiralWashers/SpiralWashers1.jpg',
            'pathname' : '/applications/servoDynamics/spiralWashers'            
        },
        {
            'label' : 'Swivels',
            'backgroundImage' : '/images/Servo_Dynamics/Swivels/Swivels1.jpg',
            'pathname' : '/applications/servoDynamics/swivels'            
        },
        {
            'label' : 'Table Top Load Frame',
            'backgroundImage' : '/images/Servo_Dynamics/TableTopLoadFrame/TableTopLoadFrame.jpg',
            'pathname' : '/applications/servoDynamics/tableTopLoadFrame'            
        },
        {
            'label' : 'Delta-P Thru Hole Mounting Plates',
            'backgroundImage' : '/images/Servo_Dynamics/Delta-P/Delta-P.jpg',
            'pathname' : '/applications/servoDynamics/delta-pThruHoleMountingPlates'            
        },
        {
            'label' : 'High Strength Studs',
            'backgroundImage' : '/images/Servo_Dynamics/HighStrengthStuds/HighStrengthStuds.jpg',
            'pathname' : '/applications/servoDynamics/highStrengthStuds'            
        },
        {
            'label' : 'Hydraulic Piping',
            'backgroundImage' : '/images/Servo_Dynamics/HydraulicPiping/HydraulicPiping1.jpg',
            'pathname' : '/applications/servoDynamics/hydraulicPiping'            
        },
        {
            'label' : 'Hydrostatic Bearing Actuators',
            'backgroundImage' : '/images/Servo_Dynamics/HydrostaticBearingActuators/HydrostaticBearingActuator1.jpg',
            'pathname' : '/applications/servoDynamics/hydrostaticBearingActuators'            
        },
        {
            'label' : 'LCA Linear Servo-Rated Actuator',
            'backgroundImage' : '/images/Servo_Dynamics/LCALinearServo-RatedActuator/LCAServo-RatedActuator1.jpg',
            'pathname' : '/applications/servoDynamics/lcaLinearServoRatedActuator'            
        },
        {
            'label' : 'LHA Fatigue Rated Hydrostatic Bearing Actuator',
            'backgroundImage' : '/images/Servo_Dynamics/LHAFatigueRatedHydrostaticBearingActuator/LHAFatigueActuator1.jpg',
            'pathname' : '/applications/servoDynamics/lhaFatigueRatedHydrostaticBearingActuator'            
        },
        {
            'label' : 'LPA Fatigue Rated Actuators',
            'backgroundImage' : '/images/Servo_Dynamics/LPAFatigueRatedActuators/LPAFatigueRatedActuator1.jpg',
            'pathname' : '/applications/servoDynamics/lpaFatigueRatedActuators'            
        },
        {
            'label' : 'SRA Series Spinning Rotary Actuators',
            'backgroundImage' : '/images/Servo_Dynamics/SRASeriesSpinningRotaryActuators/SRA1.jpg',
            'pathname' : '/applications/servoDynamics/SRASeriesSpinningRotaryActuators'            
        },
        {
            'label' : 'Structural Load Frames',
            'backgroundImage' : '/images/Servo_Dynamics/StructuralLoadFrames/StructuralLF1.jpg',
            'pathname' : '/applications/servoDynamics/structuralLoadFrames'            
        }
    ], 
    pageData : [
        {
            /* Custom Solutions */
            
            biAxialVibration : {
                subSection: "Custom Solutions",
                title : "Bi-Axial Vibration Test Stand: VB-1",
                body :
                <div>
                    <p>The Bi-Axial Vibration Test Stand is designed to perform a wide range of tests in various applications. The VB-1 is designed to accommodate a payload of 800 pounds with a maximum acceleration of 10 G. To avoid backlash and actuator alignment problems, the table is connected to the actuator with an axially stiff flexure joint. By moving the table and rotating the actuator, the system is designed for both vertical and horizontal motion.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Packaging</li>
                        <li>Electrical Component</li>
                        <li>Military</li>
                        <li>Defense</li>
                        <li>Customized to fit your needs</li>
                    </ul>
                    <br />
                    <h3>Specifications:</h3>
                    <ul>
                        <li>Table size: 24in. x 24in. (600mm x 600mm)</li>
                        <li>Frequency range: 0.1 to 100 Hz</li>
                        <li>LHA11, rated at 11 kip 6in. (150mm) stroke hydrostatic actuator (stroke is application dependent)</li>
                        <li>Single or Double 15 GPM Moog servo valve based on application</li>
                        <li>Accelerometer</li>
                    </ul>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg",
                        media: <img src="/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg"/>,
                    },
                ]               
            },
            exhaustCorrosionFatigue : {
                subSection: "Custom Solutions",
                title : "Exhaust Corrosion Fatigue Tester",
                body :
                <div>
                    <p>The Exhaust Corrosion Fatigue Tester is capable of running an accelerated corrosion test on an exhaust flex hose or exhaust de-coupler according to various customer-specific tests. Relative corrosion performance between various designs will be the main objective of this testing. Test components will be evaluated for various corrosion mechanisms, including inter granular attack along the grain boundary of the material, trans granular stress corrosion cracking, pitting, general surface corrosion, and crevice corrosion.</p>
                    <br />
                    <h3>Standards:</h3>
                    <ul>
                        <li>GM9540P Appendices A4.9 and C –</li>
                        <li>Accelerated corrosion test</li>
                        <li>GM4465P - Fog humidity cabinet</li>
                        <li>GM9505P-Automotive Environmental Cycles</li>
                        <li>GM9508P</li>
                        <li>GM9102P</li>
                        <li>ASTM B 117-Standard Practice for Operating Salt Spray (Fog) Apparatus</li>
                        <li>ASTM G85 Annex 5</li>
                        <li>SAE J2334-Cosmetic Corrosion Lab Test</li>
                    </ul>                                                   
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/ExhaustCorrosionFatigue/ExhaustCorrosionFatigueTester1.jpg",
                        media: <img src="/images/Custom_Solutions/ExhaustCorrosionFatigue/ExhaustCorrosionFatigueTester1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Custom_Solutions/ExhaustCorrosionFatigue/ExhaustCorrosionFatigueTester2.jpg",
                        media: <img src="/images/Custom_Solutions/ExhaustCorrosionFatigue/ExhaustCorrosionFatigueTester2.jpg"/>,
                    },
                ]               
            },
            seatVibrationTester : {
                subSection: "Custom Solutions",
                title : "Seat Vibration Tester",
                body :
                <div>
                    <p>The Seat Vibration Tester is designed to accommodate up to six single seats or a combination of two and three seat benches with a payload of 800 pounds and a constant acceleration of 1 G. To avoid backlash problems, the table is pivoted on a flexure design bearing. The system is designed to be assembled in an anechoic chamber.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>NVH</li>
                        <li>Squeak and Rattle Testing</li>
                    </ul>                                                   
                </div>,
                items : [
                    {
                        media:     
                        <Player
                            preload={"auto"}
                            playsInline
                            fluid={false}
                            autoPlay={true}
                            // poster="images/_assets/poster.png"
                            src="/images/Custom_Solutions/SeatVibrationTester/SeatVibrationTesterVideo.mp4"
                        >
                            <BigPlayButton position="center" />
                        </Player>,
                        backgroundImage : "/images/flat_icons/playThumb.jpg"
                    },
                    {
                        backgroundImage: "/images/Custom_Solutions/SeatVibrationTester/SeatVibrationTester1.jpg",
                        media: <img src="/images/Custom_Solutions/SeatVibrationTester/SeatVibrationTester1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Custom_Solutions/SeatVibrationTester/SeatVibrationTester2.jpg",
                        media: <img src="/images/Custom_Solutions/SeatVibrationTester/SeatVibrationTester2.jpg"/>,
                    },

                ]               
            },
            steeringAssemblyTestStand : {
                subSection: "Custom Solutions",
                title : "Steering Assembly Test Stand",
                body :
                <div>
                    <p>This system will test hydraulic power steering units consisting of a rack and pinion with an integrated power steering boost valve. The first set of tests is run without power steering fluid flowing to the unit and the next tests are run with power steering fluid. The power steering fluid is flow/pressure controlled to emulate the power steering pump in a vehicle. Several sensors measure input and output forces and torques on the specimen, while the linear and rotary positions of the parts of the specimen are also measured. This information is collected, stored, and displayed by the software running on the PC.</p>
                    <br />
                    <h3>Applications:</h3>
                        <ul>
                            <li>Steering Gear Performance</li>
                        </ul>
                        <br />
                        <h3>Test Procedures:</h3>
                        <div className="list-table">
                            <div>
                                <ul>
                                    <li>Initialization</li>
                                    <li>Dry input torque test</li>
                                    <li>Dry return ability test</li>
                                    <li>Dry return time test</li>
                                    <li>Purge cycle</li>
                                    <li>Wet input torque test</li>
                                    <li>Wet return ability test</li>
                                    <li>Purge oil from machine</li>
                                </ul>
                                <ul>
                                    <li>Wet return time test</li>
                                    <li>Power torque test (steering effort)</li>
                                    <li>Boost curve and internal leakage test</li>
                                    <li>Backlash and pressure versus angle test</li>
                                    <li>Torsion bar test</li>  
                                </ul>
                            </div>
                        </div>                                                 
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/SteeringAssemblyTestStand/SATS1.jpg",
                        media: <img src="/images/Custom_Solutions/SteeringAssemblyTestStand/SATS1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Custom_Solutions/SteeringAssemblyTestStand/SATS2.jpg",
                        media: <img src="/images/Custom_Solutions/SteeringAssemblyTestStand/SATS2.jpg"/>,
                    },
                ]               
            },
            steeringPumpTestSystem : {
                subSection: "Custom Solutions",
                title : "Steering Pump Test System",
                body :
                <div>
                <br />
                    <p>The Steering Pump Test System is a custom designed two station system. It consists of two independent Lab View based test stands with environmental chambers and a common conditioning source. It is able to simulate real time pump conditions.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Simulates real time pump conditions</li>
                        <li>ATF temperature control</li>
                        <li>Flow control</li>
                        <li>Pressure control</li>
                        <li>Pump torque control</li>
                        <li>Noise development</li>
                        <li>3-axial acceleration</li>
                        <li>Environment temp control</li>
                    </ul>
                    <br />
                    <h3>Specifications:</h3>
                    <ul>
                        <li>0-10000 RPM</li>
                        <li>120 Nm torque</li>
                        <li>150 degree C ATF temperature</li>
                        <li>-60 to 150 degree C environment</li>
                        <li>Belt mounting similar to that of a car</li>
                    </ul>                                                   
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/SteeringPumpTestSystem/SteeringPump1.jpg",
                        media: <img src="/images/Custom_Solutions/SteeringPumpTestSystem/SteeringPump1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Custom_Solutions/SteeringPumpTestSystem/SteeringPump2.jpg",
                        media: <img src="/images/Custom_Solutions/SteeringPumpTestSystem/SteeringPump2.jpg"/>,
                    },
                ]               
            },
            exciter3d : {
                subSection: "Custom Solutions",
                title : "Exciter 3D - Three Degrees of Freedom Vibraton Test System",
                body :
                <div>
                <br />
                    <p>The LINK Three Degrees of Freedom Vibration Test System is designed for the seismic qualification of mechanical or electrical components and assemblies. It can be customized to meet each user's specific testing needs and requirements.</p>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Centrally located Distribution Manifold provides cleaner installation, equalizes actuator performance, and provides easier troubleshooting</li>
                        <li>Unique Stinger design provides isolation against unwanted pitch, roll, and yaw motions</li>
                        <li>Close Coupled accumulators reduce crosstalk, providing higher motion accuracy</li>
                        <li>True current driver electronics provide higher valve response and transmitted power</li>
                        <li>Tests (based on test type) may be run independently or simultaneously in all three of the principal machine axes</li>
                    </ul>
                    <br />
                    <h3>Facilities Requirements:</h3>
                    <ul>
                        <li>HPU Power 460 VAC, 3 Phase, Amps based on size</li>
                        <li>Cooling water, typically 1/2 of the HPU flow rate</li>
                        <li>Computer Power 120/240 VAC, 50-60 Hz, 15 Amp</li>
                        <li>Uninterruptable Power Supply (UPS) recommended in case of mid-test power outage or accidental loss of power</li>
                        <li>Nitrogen tank with charging equipment for accumulators</li>
                        <li>Forklift or overhead crane for installation</li>
                        <li>Reinforced concrete reaction mass (weight and size to be determined based on application)</li>
                    </ul>                                                   
                </div>,
                items : [
                    {
                        media:     
                        <Player
                            preload={"auto"}
                            playsInline
                            fluid={false}
                            autoPlay={true}
                            // poster="images/_assets/poster.png"
                            src="/images/Custom_Solutions/Exciter3D/Exciter3DVideo.mp4"
                        >
                            <BigPlayButton position="center" />
                        </Player>,
                        backgroundImage : "/images/flat_icons/playThumb.jpg"
                    },
                    {
                        backgroundImage: "/images/Custom_Solutions/Exciter3D/Exciter3D1.jpg",
                        media: <img src="/images/Custom_Solutions/Exciter3D/Exciter3D1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Custom_Solutions/Exciter3D/Exciter3D2.jpg",
                        media: <img src="/images/Custom_Solutions/Exciter3D/Exciter3D2.jpg"/>,
                    },
                ]               
            },
            ballJointBootTestMachine : {
                subSection: "Custom Solutions",
                title : "Ball Joint Boot Testing Machine",
                body :
                <div>
                <br />
                    <p>The Ball Joint Boot Test Machine is specifically designed to run the Key Life Tests. This test is for boots protecting ball joints and includes the following test requirements:</p>
                    <ul>
                        <li>Block cycle of articulation of joint</li>
                        <li>Rotation of joint</li>
                        <li>Air temperature range from -40&deg;C to +80&deg;C</li>
                        <li>Slurry with independent nozzles</li>
                        <li>Cooling of slurry to -15&deg;C</li>
                        <li>Environment humidity control</li>
                        <li>Adjustable start/stop position of articulation</li>
                    </ul>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Boots protecting ball joints</li>
                    </ul>
                    <br />
                    <h3>Specifications:</h3>
                    <ul>
                        <li>Reliability</li>
                        <li>Efficiency &amp; Flexibility - Can run two independent tests of five parts each, or one test with up to ten parts</li>
                    </ul>                                                   
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/BallJointBootTestMachine/BallJointBootTestMachine1.jpg",
                        media: <img src="/images/Custom_Solutions/BallJointBootTestMachine/BallJointBootTestMachine1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Custom_Solutions/BallJointBootTestMachine/BallJointBootTestMachine2.jpg",
                        media: <img src="/images/Custom_Solutions/BallJointBootTestMachine/BallJointBootTestMachine2.jpg"/>,
                    },
                ]               
            },
            bolsterSpringQCTestSystem : {
                subSection: "Custom Solutions",
                title : "Bolster Spring QC Test System",
                body :
                <div>
                    <br />
                    <p>The Bolster Spring QC Test System is designed as a three-station audit machine that performs 100% verification of bond strength and two separate spring rates. The system is configured with three independent tests that are performed on each bolster.</p>
                    <br />
                    <div className="list-table">   
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Tracks sample through all three tests</li>
                                <li>Automatically printed label for passing bolsters</li>
                            </ul>
                            <ul>
                                <li>Visual indicators signify test completion</li>     
                            </ul>   
                        </div>

                        <br />                    
                        <h3>Specifications:</h3>
                        <div>
                            <ul>
                                <li>Ramp speed: 2" per minute</li>
                                <li>Max load ball screw: 10 tons</li>
                                <li>Load cell: 5,000 lbs.</li>
                                <li>Network capability</li>
                            </ul>
                            <ul>    
                                <li>PLC control with panel view &amp; software</li>
                                <li>Label printer and software</li>
                                <li>Hydraulic loading actuator</li>
                            </ul>
                        </div>

                        <br />
                        <h3>Test Procedures:</h3>
                        <div>
                            <ul>
                                <li>Rubber to metal bond strength</li>
                                <li>Spring rates in height</li>
                            </ul>
                            <ul>
                                <li>Spring rates in vertical load</li>
                            </ul>
                        </div>
                    </div>                                                   
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Custom_Solutions/BlosterSpringQC/BolsterSpringTestSystem1.jpg",
                        media: <img src="/images/Custom_Solutions/BlosterSpringQC/BolsterSpringTestSystem1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Custom_Solutions/BlosterSpringQC/BolsterSpringTestSystem2.jpg",
                        media: <img src="/images/Custom_Solutions/BlosterSpringQC/BolsterSpringTestSystem2.jpg"/>,
                    },
                ]               
            },
            /* Control & Aquisition */
            dynoView : {
                subSection: "Control & Aquisition",
                title : "Dyno View",
                body :
                <div>
                    <p>Dyno View is the user interface of ProLINK. Dyno View allows the user to customize screen displays to suit their needs. The operator is able to select a combination of real time information as well as apply summary and graphical information.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Used during testing of ProLINK controlled machines</li>
                        <li>Help diagnose problems during a test</li>
                    </ul>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Can be run remotely via a local-area network (LAN)</li>
                        <li>Multiple remote site monitoring is available</li>
                        <li>Control your machine with a few clicks of the mouse</li>
                        <li>Data review and control programming may occur at the test station, or on another LAN station, without interrupting the test in progress</li>
                    </ul>                         
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Control_Acquisition/DynoView/DynoView1.jpg",
                        media: <img src="/images/Control_Acquisition/DynoView/DynoView1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Control_Acquisition/DynoView/DynoView2.jpg",
                        media: <img src="/images/Control_Acquisition/DynoView/DynoView2.jpg"/>,
                    },
                ]               
            },
            m4275ethernet : {
                subSection: "Control & Aquisition",
                title : "Model 4275 Ethernet Data Acquisition & Control Conversion Kit",
                body :
                <div>
                    <p>The path for customers to replace control computers can be difficult due to technology changes through the years. Today, procuring a specialized computer that features adequate card slots for the existing interface boards is almost impossible to find due to the adaptation of Ethernet.<br /><br />The Model 4275 Ethernet Conversion Kit provides a simple and cost effective means of upgrading most existing LINK control systems.  The conversion kit provides the hardware needed to replace the analog and digital interface PC boards that reside inside the machine control computer.</p>

                    <br />
                    <div className="list-table">
                        <div className="list-header">    
                           <h3>Applications:</h3>
                           <h3>Key Benefits:</h3>
                        </div> 
                        
                        <div>
                            <ul>
                                <li>Upgrade existing LINK control systems</li>
                                <li>Cost effective</li>
                            </ul>
                            <ul>
                                <li>Fast installation</li>
                                <li>Solves computer upgrade challenges</li>
                            </ul>
                        </div>
                        <br />
                    </div>

                    <br />
                    <h3>Computer &amp; Software Requirements:</h3>
                    <div className="list-table">             
                        <div>
                            <ul>
                                <li>Ethernet: One free port, RJ45, 10/100/1000 base T, 803.2</li>
                                <li>Analog Inputs: 64 channel, &plusmn;10 V in, 16 bit A/D, 2000 Hz sample</li>
                                <li>Digital Inputs: 48 channel, TTL voltage level</li>
                                <li>Counter Inputs: 4 channel, 5 MHz, quadrature plus marker, 32 bit, 2000 Hz sample</li>
                            </ul>
                            <ul>
                                <li>ProLINK Software: Latest version required (not included)</li>
                                <li>Analog Outputs: 16 channel, &plusmn;10 V in, 16 bit D/A, 300 Hz update</li>
                                <li>Digital Outputs: 48 channel, open collector, 35 Vdc, 0.2 A</li>
                            </ul>
                        </div> 
                    </div>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Control_Acquisition/M-4275DataAcquisitionControl/M-4275.jpg",
                        media: <img src="/images/Control_Acquisition/M-4275DataAcquisitionControl/M-4275.jpg"/>,
                    },
                ]               
            },
            labLink : {
                subSection: "Control & Aquisition",
                title : "LabLINK",
                body :
                <div>
                    <p>LabLINK is a complete laboratory management application enabling labs to streamline testing, schedule resources, monitor asset utilization, and data mine in an easy to use application. LabLINK is a multifaceted solution. With this application you can generate test requests as well as create test process checklists - serving as a reliable tool for your laboratory team. LabLINK is built to accommodate customization with the understanding that you will have unique and varying test requirements.</p>
                    
                    <br />
                    <h3>Applications:</h3>
                    <p>LabLINK is the umbrella application and is comprised of five main modules. The program can be implemented as a complete package or as standalone modules with the ability to add modules in the future. This enables you to create a customized solution based on your needs and priorities.</p>
                
                    <div className="list-table">
                        <div>
                            <ul>
                                <li>Test Request Module: Customizable user input for specific parameters</li>
                                <li>Asset Utilization Module: Machine utilization and efficiency reporting</li>
                                <li>Connectivity Module: Operator paging and database connectivity to ProLINK</li>
                            </ul>

                            <ul>
                                <li>Scheduling Module: Drag and drop scheduling interface with dynamic updating</li>
                                <li>Data Warehousing Module: Warehousing summary data and basic queries across large population of data</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Key Benefits:</h3>
                        <div>
                            <ul>
                                <li>Comprehensive Lab Management: Manage an entire lab from a web browser</li>
                                <li>Modular By Design: Versatile solutions, enabling you to choose which module will best fit your testing needs</li>
                                <li>Versatility to Work with Existing ERP Systems: Direct integration with existing ERP possible (Custom software required)</li>
                            </ul>

                            <ul>
                                <li>Developed Specifically for Lab Management: Fits precisely with the needs of the customer while streamlining processes and enhancing efficiency</li>
                                <li>Optimizes Laboratory Efficiency &amp; Security: Faster and safer lab management that will streamline the laboratory processes while maintaining security</li>
                            </ul>
                        </div> 
                    </div>       
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Control_Acquisition/LabLINK/LabLINK1.jpg",
                        media: <img src="/images/Control_Acquisition/LabLINK/LabLINK1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Control_Acquisition/LabLINK/LabLINK2.jpg",
                        media: <img src="/images/Control_Acquisition/LabLINK/LabLINK2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Control_Acquisition/LabLINK/LabLINK3.jpg",
                        media: <img src="/images/Control_Acquisition/LabLINK/LabLINK3.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Control_Acquisition/LabLINK/LabLINK4.jpg",
                        media: <img src="/images/Control_Acquisition/LabLINK/LabLINK4.jpg"/>,
                    },
                ]               
            },
            linkSquealReport : {
                subSection: "Control & Aquisition",
                title : "LINK Squeal Report Application",
                body :
                <div>
                    <p>The LINK Squeal Report Application allows users to identify characteristics of brake testing for noise, vibration, and harshness (NVH) and observe the surrounding instrumentation, such as pad temperature and deceleration, in relation to those events.<br /><br />The software contains an algorithm that will identify particular characteristics of NVH occurrences, and how they react within a spectrum, the duration, and other critical components to discovering a noise within a tested component or vehicle.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Live, or post process evaluation of on-road NVH test data</li>
                    </ul>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Review millions of data points in minutes</li>
                        <li>Automatic report generation</li>
                        <li>Standard or user-customized report</li>
                    </ul>
                    <br />
                    <h3>Test Procedures:</h3>
                    <ul>
                        <li>LACT and other NVH traffic tests</li>
                    </ul>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Control_Acquisition/LINKSquealReportApplication/LINKSquealReportApplication.jpg",
                        media: <img src="/images/Control_Acquisition/LINKSquealReportApplication/LINKSquealReportApplication.jpg"/>,
                    },
                ]               
            },
            vMax : {
                subSection: "Control & Aquisition",
                title : "V-Max 4000 Data Acquisition System",
                body :
                <div>
                    <p>The V-Max 4000 is the latest addition to the LINK line of data acquisition equipment. This system combines rugged dependability with the versatility of a portable, completely modular system. Modules can easily be added or removed to provide more or fewer data channels as testing requirements change.<br /><br />A variety of modules, both input and output, are available and include Analog Input, Differential Analog Input, Analog Output, Temperature, CAN Input for vehicle, CAN bus type devices, Pulse Input and Digital Input/Output, and Noise, Vibration, Harshness (NVH).<br /><br />The V-Max operates with the ProLINK software, providing an intuitive means of setting up and operating a test. ProLINK’s data reviewing software allows instant review and analysis of collected data.</p>

                    <div className="list-table">
                        <br />
                        <h3>Key Benefits:</h3>
                        <div>
                            <ul>
                                <li>User friendly - simple setup for quick answers</li>
                                <li>True modularity for <br />cost-efficiency</li>
                                <li>Individually calibrated modules</li>
                            </ul>

                            <ul>
                                <li>Black Box or real-time operation</li>
                                <li>ProLINK software for simple, intuitive user interface</li>
                                <li>Global support and service</li>
                            </ul>
                        </div>

                        <br />
                        <h3>Test Procedures:</h3>
                        <div>
                            <ul>
                                <li>FMVSS 105</li>
                                <li>FMVSS 126</li>
                                <li>FMVSS 135</li>
                                <li>Fade</li>
                            </ul>
                            <ul>
                                <li>AMS</li>
                                <li>LACT</li>
                                <li>Hi Altitude Vacuum Tests</li>
                                <li>ECE certification tests</li>
                            </ul>
                        </div>
                    </div>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Control_Acquisition/V-MAX4000/V-Max1.jpg",
                        media: <img src="/images/Control_Acquisition/V-MAX4000/V-Max1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Control_Acquisition/V-MAX4000/V-Max2.jpg",
                        media: <img src="/images/Control_Acquisition/V-MAX4000/V-Max2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Control_Acquisition/V-MAX4000/V-Max3.jpg",
                        media: <img src="/images/Control_Acquisition/V-MAX4000/V-Max3.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Control_Acquisition/V-MAX4000/V-Max4.jpg",
                        media: <img src="/images/Control_Acquisition/V-MAX4000/V-Max4.jpg"/>,
                    },
                ]               
            },
            prolink : {
                subSection: "Control & Aquisition",
                title : "ProLINK",
                body :
                <div>
                    <p>ProLINK is the most in-depth and reliable software available for the testing industry and has the flexibility to adapt to your changing needs. This intuitive program can be used across a wide range of testing applications and is renowned for its ease of use.<br /><br />The control system consists of five main application modules that work together to provide a robust environment for the most demanding control and test systems. Each software tool corresponds to a step in the overall testing process: Test Setup, Procedure, Execution, Data Review and Final Report.</p>

                    <div className="list-table">
                        <br />
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Brake dynamometers</li>
                                <li>Custom test solutions</li>
                                <li>Aircraft dynamometers</li>
                                <li>Material property testers</li>
                            </ul>
                            <ul>
                                <li>Chassis dynamometers</li>
                                <li>Wet and dry friction testers</li>
                                <li>Transmission dynamometer</li>
                                <li>Vehicle measurement systems</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Key Benefits:</h3>
                        <div>
                            <ul>
                                <li>Intuitive, easy to learn</li>
                                <li>Layers of sophistication to grow with you</li>
                                <li>Users can employ Windows interface</li>
                            </ul>
                            <ul>
                                <li>Flexible/adaptable to suit your needs</li>
                                <li>Off-the-shelf ready</li>
                                <li>Same software used for multiple machine types</li>
                            </ul>
                        </div>
                    </div>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Control_Acquisition/ProLINK/ProLINK1.jpg",
                        media: <img src="/images/Control_Acquisition/ProLINK/ProLINK1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Control_Acquisition/ProLINK/ProLINK2.jpg",
                        media: <img src="/images/Control_Acquisition/ProLINK/ProLINK2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Control_Acquisition/ProLINK/ProLINK3.jpg",
                        media: <img src="/images/Control_Acquisition/ProLINK/ProLINK3.jpg"/>,
                    },
                ]               
            },
            regensim : {
                subSection: "Control & Aquisition",
                title : "RegenSIM",
                body :
                <div>
                    <p>LINK, through the advent of RegenSim, has developed the capability to simulate regenerative braking conditions on inertia brake dynamometers. This is the most advanced regenerative braking testing software available in the market today.<br /><br />This system is able to control to a constant deceleration, simulating the regenerative operation from the vehicle. RegenSim enables the ProLINK control system to act as a vehicle’s Electronic Control Unit (ECU), distributing the amount of work to be done between the friction brake and the regenerative source.</p>
                    <br/>
                    <h3>Applications:</h3>
                    <ul>
                        <li>Regenerative braking</li>
                    </ul>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Can be added to any test sequence by entering basic hybrid vehicle parameters</li>
                        <li>The ProLINK control system is flexible and can take in different vehicle inputs to simulate regenerative braking profiles</li>
                        <li>The dynamometer provides accurate control even in durations in which there is no work performed by the friction brake</li>
                    </ul>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Control_Acquisition/RegenSim/RegenSim.jpg",
                        media: <img src="/images/Control_Acquisition/RegenSim/RegenSim.jpg"/>,
                    },
                ]               
            },
            revdataPlus : {
                subSection: "Control & Aquisition",
                title : "RevData Plus",
                body :
                <div>
                    <p>The RevData Plus program is an interactive data reviewer. Its purpose is to easily examine test data in both tabular and graphical format.  This system allows quick, apply-based review of all types of LINK test data.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Data reduction</li>
                        <li>Data review</li>
                    </ul>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Built-in text file exporter</li>
                        <li>Data can be exported for a single apply, a full section of applies or an entire test</li>
                        <li>Custom graph configurations may be built and saved for comparison purposes</li>
                    </ul>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Control_Acquisition/RevdataPlus/RevData1.jpg",
                        media: <img src="/images/Control_Acquisition/RevdataPlus/RevData1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Control_Acquisition/RevdataPlus/RevData2.jpg",
                        media: <img src="/images/Control_Acquisition/RevdataPlus/RevData2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Control_Acquisition/RevdataPlus/RevData3.jpg",
                        media: <img src="/images/Control_Acquisition/RevdataPlus/RevData3.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Control_Acquisition/RevdataPlus/RevData4.jpg",
                        media: <img src="/images/Control_Acquisition/RevdataPlus/RevData4.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Control_Acquisition/RevdataPlus/RevData5.jpg",
                        media: <img src="/images/Control_Acquisition/RevdataPlus/RevData5.jpg"/>,
                    },
                ]               
            },
            scriptEdit : {
                subSection: "Control & Aquisition",
                title : "Script Edit",
                body :
                <div>
                    <p>Script Edit is an integrated editor-compiler-debugger that provides some special features associated with control programming. Its main purpose is to modify the scripts, which are the test stand control programs.<br /><br />The script language allows full control over all aspects of the machine, including direct access to all physical IO points. This allows for a very flexible and powerful machine control environment that can adapt to the ever-changing requirements of test equipment.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Edit</li>
                        <li>Compile data</li>
                        <li>Debug data</li>
                    </ul>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Multiple test windows</li>
                        <li>Flying "hint" help</li>
                        <li>"Autotype" code completion</li>
                        <li>Breakpoints</li>
                        <li>Single-stepping</li>
                    </ul>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Control_Acquisition/ScriptEdit/ScriptEdit1.jpg",
                        media: <img src="/images/Control_Acquisition/ScriptEdit/ScriptEdit1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Control_Acquisition/ScriptEdit/ScriptEdit2.jpg",
                        media: <img src="/images/Control_Acquisition/ScriptEdit/ScriptEdit2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Control_Acquisition/ScriptEdit/ScriptEdit3.jpg",
                        media: <img src="/images/Control_Acquisition/ScriptEdit/ScriptEdit3.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Control_Acquisition/ScriptEdit/ScriptEdit4.jpg",
                        media: <img src="/images/Control_Acquisition/ScriptEdit/ScriptEdit4.jpg"/>,
                    },
                ]               
            },
            
            /* Brakes 
            - See "BrakesSubMenuData" Component
            */

            /* Wheel End */
            Force_MotionTireTestingSystem : {
                subSection: "Wheel End",
                title : "Force & Motion Tire Testing System",
                body :
                <div>
                    <p>The Force & Motion system, on a rolling road platform, can perform parking forces, a one-of-a-kind capability used to accurately determine forces encountered by the tire during parking or similar events. This capability was designed to provide the customer a tool for accurately predicting the forces applied to the tire, suspension and steering mechanisms during the most extreme conditions of operation.</p>
                    <br />
                    <h3>Key Features</h3>
                    <ul>
                        <li>Force and Moment Measurements</li>
                        <li>Turn-key Testing Services</li>
                        <ul>
                            <li>MF 5.1, 5.2, 6.1, 6.2 model generation</li>
                            <li>MF-Swift models</li>
                        </ul>
                        <li>Static Stiffnesses</li>
                        <li>Tire surface temperatures</li>
                        <li>Rolling Radius</li>
                        <li>Parking Forces</li>
                        <ul>
                            <li>Dynamic scrub radius</li>
                            <li>Dynamic inclination angle</li>
                            <li>Virtual, dynamic kingpin orientation</li>
                            <li>Braked or Free-Rolling</li>
                        </ul>
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
                            src="/images/Wheel_End/Force_MotionTireTestingSystem/Force_MotionVideo.mp4"
                        >
                            <BigPlayButton position="center" />
                        </Player>,
                        backgroundImage : "/images/flat_icons/playThumb.jpg"
                    },
                    {
                        backgroundImage: "/images/Wheel_End/Force_MotionTireTestingSystem/Force_Motion1.jpg",
                        media: <img src="/images/Wheel_End/Force_MotionTireTestingSystem/Force_Motion1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Wheel_End/Force_MotionTireTestingSystem/Force_Motion2.jpg",
                        media: <img src="/images/Wheel_End/Force_MotionTireTestingSystem/Force_Motion2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Wheel_End/Force_MotionTireTestingSystem/Force_Motion3.jpg",
                        media: <img src="/images/Wheel_End/Force_MotionTireTestingSystem/Force_Motion3.jpg"/>,
                    }, 
                    {
                        backgroundImage: "/images/Wheel_End/Force_MotionTireTestingSystem/Force_Motion4.jpg",
                        media: <img src="/images/Wheel_End/Force_MotionTireTestingSystem/Force_Motion4.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Wheel_End/Force_MotionTireTestingSystem/Force_Motion5.jpg",
                        media: <img src="/images/Wheel_End/Force_MotionTireTestingSystem/Force_Motion5.jpg"/>,
                    },
                ]               
            },
            corneringFatigue : {
                subSection: "Wheel End",
                title : "Model 1750 Cornering Fatigue Machine",
                body :
                <div>
                    <p>The Model 1750 Cornering Fatigue Machine is designed to reproduce the forces acting on wheel and brake components. The test is conducted by controlling the magnitude of the cornering forces to determine the integrity of the test components. Test components are vertically mounted on a rotating table, and varying loads are applied at a fixed angle from below the test sample. This machine is capable of evaluating rotors, wheels, bearing packs, axle extenders, etc.<br /><br />While testing, the control system maintains a constant force on the load arm while spinning the rotary table at the desired test speed. The test is complete when the test part fails, or the required number of rotations has reached completion.</p>

                    <div className="list-table">
                        <br />
                        <h3>Applications (Test Fatigue of):</h3>
                        <div>
                            <ul>
                                <li>Rotors</li>
                                <li>Bearing packs</li> 
                            </ul>
                            <ul>
                                <li>Wheels</li>
                                <li>Axle extenders</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Applications (Monitors):</h3>
                        <div> 
                            <ul>
                                <li>Normal Load</li>
                                <li>Load Variation</li>
                                <li>Speed</li>
                            </ul>
                            <ul>
                                <li>Revolutions</li>
                                <li>Torque</li>
                                <li>Travel</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Specifications:</h3>
                        <div>
                            <ul>  
                                <li>Control System: <br />ProLINK software</li>
                                <li>Maximum Load: 2,000 lbs.</li>
                                <li>Maximum Table Speed: <br />800 rpm</li>
                            </ul>
                            <ul>
                                <li>Drive/Motor: 7.5 HP</li>
                                <li>Max Wheel Size: 22"</li>
                            </ul>
                        </div>
                    </div>                         
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Wheel_End/M-1750CorneringFatigue/M-1750CorneringFatigue.jpg",
                        media: <img src="/images/Wheel_End/M-1750CorneringFatigue/M-1750CorneringFatigue.jpg"/>,
                    },
                ]               
            },
            rotaryFatigue : {
                subSection: "Wheel End",
                title : "Model 2500 Rotary Fatigue Machine",
                body :
                <div>
                    <p>The Model 2500 is designed to determine the integrity of wheel and brake components by replicating the force on the components by controlling the magnitude of the cornering forces consistently. This machine tests rotors, wheels, bearing packs, axle extenders, etc., by mounting the test components vertically on a rotating table and applying a varying load at an adjustable angle.<br /><br />The control system maintains a constant force on the load arm while spinning the rotary table at the desired test speed. The test is complete when either the test part fails, or the required number of rotations is reached.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Rotary fatigue of rotors, wheels, bearing packs, axle extenders, etc.</li>
                    </ul>
                    <br />
                    <h3>Specifications:</h3>
                    <ul>
                        <li>Control System: ProLINK software</li>
                        <li>Maximum load: 25,000 lbs</li>
                        <li>Angle load adjust: 90&deg;</li>
                        <li>Maximum table speed: 00 rpm</li>
                        <li>Drive/motor: 10 HP</li>
                        <li>Table diameter: 40"</li>
                        <li>Load system: Hydraulic</li>
                    </ul>                           
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Wheel_End/M-2500RotaryFatigue/M-2500.jpg",
                        media: <img src="/images/Wheel_End/M-2500RotaryFatigue/M-2500.jpg"/>,
                    },
                ]               
            },
            hubBearing : {
                subSection: "Wheel End",
                title : "Model 2938 Hub & Wheel Bearing Tester",
                body :
                <div>
                    <p>The Model 2938 is designed to reproduce the forces acting on wheel bearings as seen in vehicles by controlling the magnitude of the cornering and radial forces.<br /><br />The control system maintains a constant force on each load while rotating the test part at the desired test speed. The test is complete when either the test part fails, or the required number of rotations is reached.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Hub and wheel bearings</li>
                    </ul>
                    <br />
                    <h3>Specifications:</h3>
                    <ul>
                        <li>Control system – ProLINK software</li>
                        <li>Maximum Radial Load - 5,000 lbs.</li>
                        <li>Maximum Axial Load - 5,000 lbs.</li>
                        <li>Maximum Speed - 500 rpm</li>
                        <li>Drive/Motor - 10 HP</li>
                        <li>Vehicle Radius Rolling Range - Min 10, Max 20</li>
                    </ul>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Wheel_End/M-2938HUB_Bearing/M-2938HUB1.jpg",
                        media: <img src="/images/Wheel_End/M-2938HUB_Bearing/M-2938HUB1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Wheel_End/M-2938HUB_Bearing/M-2938HUB2.jpg",
                        media: <img src="/images/Wheel_End/M-2938HUB_Bearing/M-2938HUB2.jpg"/>,
                    }
                ]               
            },
            eccentricMassWheel : {
                subSection: "Wheel End",
                title : "Model 3526 Eccentric Mass Wheel",
                body :
                <div>
                    <p>The Model 3526 Eccentric Mass Tester is designed to evaluate automotive wheel fatigue without spinning the test part. A stationary moment shaft is attached to the wheel from below with an offset mass spinning around the moment shaft. The spinning offset mass provides a load that transfers through the moment shaft to the test wheel.<br /><br />Fixtures are utilized to align the wheel and attach the moment shaft. Due to the height of the machine, a work platform is required around the test area. This machine is the newest technology for wheel fatigue testing and designed for SAE J328 testing with passenger car and light truck applications.</p>

                    <div className="list-table">
                        <br />
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Wheel fatigue</li>
                                <li>Passenger car</li>
                            </ul>
                            <ul>
                                <li>Light truck</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Specifications:</h3>
                        <div>
                            <ul>
                                <li>Wheel Moment - 1 kNm to <br />25 kNm</li>
                                <li>Test Part - Stationary</li>
                                <li>Load Speed - 90 rpm to 2500 rpm (1.5 Hz to 41.7 Hz)</li>
                                <li>Load (Offset Mass) - Interchangeable mass</li>
                                <li>Work Platform Size - 2.75 x 2.75 x 0.83 m</li>
                            </ul>
                            <ul>
                                <li>Moment Shaft - 762 mm <br />(30") min. from rim centerline to load</li>
                                <li>Deflection Measurement - <br />(2) Lasers, 90&deg; apart pointed at moment shaft</li>
                                <li>Table Diameter - 1220 mm (48")</li>  
                            </ul>
                        </div>
                        <br />
                        <h3>Test Procedures:</h3>
                        <div>
                            <ul>
                                <li>SAE J328</li>
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
                            src="/images/Wheel_End/Model3526EccentricMass/M-3526EMVideo.mp4"
                        >
                            <BigPlayButton position="center" />
                        </Player>,
                        backgroundImage : "/images/flat_icons/playThumb.jpg"
                    },
                    {
                        backgroundImage: "/images/Wheel_End/Model3526EccentricMass/M-3526EM1.jpg",
                        media: <img src="/images/Wheel_End/Model3526EccentricMass/M-3526EM1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Wheel_End/Model3526EccentricMass/M-3526EM2.jpg",
                        media: <img src="/images/Wheel_End/Model3526EccentricMass/M-3526EM2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Wheel_End/Model3526EccentricMass/M-3526EM3.jpg",
                        media: <img src="/images/Wheel_End/Model3526EccentricMass/M-3526EM3.jpg"/>,
                    },
                ]               
            },
            bearingTest : {
                subSection: "Wheel End",
                title : "Model 3546 Hub/Wheel Bearing Tester",
                body :
                <div>
                    <p>The Model 3546 is designed to reproduce the forces acting on vehicle wheel bearings by controlling the magnitude of the cornering and radial forces. The axial and radial load apply systems utilize hydraulic cylinders.<br /><br />The control system maintains a constant force on each load apply system while rotating the test part at the desired test speed. The test is complete when either the test part fails or the required number of rotations is reached.</p>
                    <br />
                    <h3>Specifications:</h3>
                    <ul>
                        <li>Control System – ProLINK software</li>
                        <li>Maximum Radial Load - 32,000 N</li>
                        <li>Maximum Axial Load - 24,000 N</li>
                        <li>Maximum Speed - 2000 rpm</li>
                        <li>Vehicle Radius Rolling Range - Min 280mm-Max 410mm</li>
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
                            src="/images/Wheel_End/M-3546BearingTester/M-3546BearingTesterVideo.mp4"
                        >
                            <BigPlayButton position="center" />
                        </Player>,
                        backgroundImage : "/images/flat_icons/playThumb.jpg"
                    },
                    {
                        backgroundImage: "/images/Wheel_End/M-3546BearingTester/M-3546BearingTester1.jpg",
                        media: <img src="/images/Wheel_End/M-3546BearingTester/M-3546BearingTester1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Wheel_End/M-3546BearingTester/M-3546BearingTester2.jpg",
                        media: <img src="/images/Wheel_End/M-3546BearingTester/M-3546BearingTester2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Wheel_End/M-3546BearingTester/M-3546BearingTester3.jpg",
                        media: <img src="/images/Wheel_End/M-3546BearingTester/M-3546BearingTester3.jpg"/>,
                    },
                ]               
            },
            radialFatigue : {
                subSection: "Wheel End",
                title : "Model 3830 Radial Fatigue/Load Machine",
                body :
                <div>
                    <p>The Model 3830 Radial Fatigue Machine is capable of reproducing the radial forces acting on wheels and tires to evaluate their integrity. This roadwheel type machine functions by applying a constant load to the test wheel and tire similar to the surface of the roadwheel and inline radially with the center of the test article. The rotational axis of both the test article and road wheel are parallel.<br /><br />The radial load is applied and controlled using a servo valve, hydraulic cylinder, and hydraulic power unit. Tire pressure can be controlled through automatic inflation and deflation systems.<br /><br />The test article must perform a minimum number of test cycles without test termination due to fatigue cracking or inability to maintain test load.</p>

                    <div className="list-table">
                        <br />
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Evaluates wheel and tire integrity</li>
                            </ul>

                            <ul>
                                <li>Detects radial fatigue</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Specifications:</h3>
                        <div>
                            <ul>
                                <li>Control System – ProLINK software</li>
                                <li>Maximum Load - 4,550 kg (10,000 lbs)</li>
                                <li>Load Angle - Normal to the roadwheel surface</li>
                                <li>Maximum Speed - 120 kph (75 mph)</li>
                            </ul>
                            <ul>
                                <li>Drive/Motor - 45 kW (60 HP)</li>
                                <li>Roadwheel Diameter - 1707 mm (67.23”)</li>
                                <li>Max Wheel Size - 47”</li>
                                <li>Test Stations - Single, double or four</li>
                            </ul>  
                        </div>
                    </div>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Wheel_End/Model3830RadialFatigueLoadMachine/M-3830RadialLoadMachine1.jpg",
                        media: <img src="/images/Wheel_End/Model3830RadialFatigueLoadMachine/M-3830RadialLoadMachine1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Wheel_End/Model3830RadialFatigueLoadMachine/M-3830RadialLoadMachine2.jpg",
                        media: <img src="/images/Wheel_End/Model3830RadialFatigueLoadMachine/M-3830RadialLoadMachine2.jpg"/>,
                    },
                ]               
            },
            bearingEndurance : {
                subSection: "Wheel End",
                title : "Model 3928 Bearing Endurance Test Machine",
                body :
                <div>
                    <p>The Model 3928 provides a sophisticated dual station test system to perform endurance testing on automotive wheel bearings. A single control system is integrated to run both test stations. The Model 3928 is an ideal instrument for control, product development research, and other endurance applications.<br /><br />The control system maintains a constant load on each bearing assembly while rotating the test parts at user-programmable test speeds. Simulated forces are reproduced via a pneumatically actuated load apply system.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Endurance testing on automotive wheel bearings</li>
                        <li>Control testing</li>
                        <li>Product development research</li>
                    </ul>
                    <br />
                    <h3>Specifications:</h3> 
                    <ul>
                        <li>11.2 kW Motor</li>
                        <li>1500 rpm Max Speed</li>
                        <li>22,240 N Max Load Apply</li>
                        <li>1128 m<sup>3</sup>/hr Max Cooling Airflow</li>
                    </ul>                           
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Wheel_End/Model3928BearingEnduranceTestMachine/M-3928BETM1.jpg",
                        media: <img src="/images/Wheel_End/Model3928BearingEnduranceTestMachine/M-3928BETM1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Wheel_End/Model3928BearingEnduranceTestMachine/M-3928BETM2.jpg",
                        media: <img src="/images/Wheel_End/Model3928BearingEnduranceTestMachine/M-3928BETM2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Wheel_End/Model3928BearingEnduranceTestMachine/M-3928BETM3.jpg",
                        media: <img src="/images/Wheel_End/Model3928BearingEnduranceTestMachine/M-3928BETM3.jpg"/>,
                    }
                ]               
            },
            WheelImpactTester : {
                subSection: "Wheel End",
                title : "Model 1230 Wheel Impact Tester",
                body :
                <div>
                    <p>The Model 1230 Wheel Impact Test System measures the results of impact by a dropped weight on wheels and other components. The tester is mounted in a pit below floor level with a two-post frame and guide assembly extending above the floor. Fixtures and detachable striker heads are available to perform vertical or angular impact on a variety of wheels. A motorized winch is used to raise the drop box and incremental weights from up to 4.5 m above the test item. A remote controlled latch releases the drop box while sensors measure position and velocity.</p>
                    <br />
                    <h3>Specifications:</h3>
                    <ul>
                        <li>Control System: ProLINK</li>
                        <li>Drop Box: 115 to 450 kg</li>
                        <li>Drop Height: 0 to 4.5 m</li>
                        <li>Velocity: 0.025 to 10 m/s</li>
                        <li>Position: 0 to 5000 mm</li>
                        <li>Impact Load Cell: 9000 kg Compression</li>
                    </ul>
                    <br />
                    <h3>Test Procedures:</h3>
                    <ul>
                        <li>SAE J175</li>
                        <li>OEM test standards</li>
                    </ul>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Wheel_End/Model1230WheelImpactTester/HammerheadStand1.jpg",
                        media: <img src="/images/Wheel_End/Model1230WheelImpactTester/HammerheadStand1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Wheel_End/Model1230WheelImpactTester/HammerheadStand2.jpg",
                        media: <img src="/images/Wheel_End/Model1230WheelImpactTester/HammerheadStand2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Wheel_End/Model1230WheelImpactTester/HammerheadStand3.jpg",
                        media: <img src="/images/Wheel_End/Model1230WheelImpactTester/HammerheadStand3.jpg"/>,
                    },
                ]               
            },
            biAxialWheelTester : {
                subSection: "Wheel End",
                title : "Model 3536 Biaxial Wheel Tester",
                body :
                <div>
                    <p>The Model 3536 Biaxial Wheel Tester performs wheel and hub durability tests in a laboratory setting. It is an efficient and easy-to-use tool that simulates actual driving conditions for vehicles from passenger cars to light trucks and SUV's.<br /><br />Innovative use of electric servo motors, ball screw actuators, and a multi-axis force transducer enable LINK's proprietary Moment Control method to deliver higher levels of accuracy and repeatability, while shortening test time.</p>

                    <div className="list-table"> 
                    <br />
                        <div className="list-header">
                            <h3>Applications:</h3>
                            <h3>Key Benefits:</h3>
                        </div> 
                        <div>
                            <ul>
                                <li>Wheel and hub durability</li>
                                <li>Passenger cars to light trucks and SUV's</li>
                                <li>Short test times</li>
                            </ul>
                            <ul>
                                <li>Reduced noise and minimum maintenance</li>
                                <li>Automatic tire pressure system that maintains preset pressure</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Specifications:</h3>
                        <div>
                            <ul>
                                <li>Drum Diameter - 970 mm or 1050 mm</li>
                                <li>Drum Width - 340 mm (between curb rings)</li>
                                <li>Maximum Activator Load Forces<br />- Radial +/- 40 kN maximum<br />- Lateral +/- 25 kN maximum</li>
                            </ul>
                            <ul>
                                <li>Camber Angle - +20&deg; to -20&deg; &plusmn;0.05&deg;</li>
                                <li>Drive Motor - 55 kW (74 HP)</li>
                                <li>Actuator Strokes &amp; Angle<br />- Radial - 250 mm<br />- Lateral - 250 mm</li>
                                <li>Speed<br />- 183 kph with 970mm drum<br />- 198 kph with 1050 mm drum</li>
                            </ul>
                        </div>
                    </div>                           
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Wheel_End/Model3536BiaxialWheelTester/Bi-Axial1.jpg",
                        media: <img src="/images/Wheel_End/Model3536BiaxialWheelTester/Bi-Axial1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Wheel_End/Model3536BiaxialWheelTester/Bi-Axial2.jpg",
                        media: <img src="/images/Wheel_End/Model3536BiaxialWheelTester/Bi-Axial2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Wheel_End/Model3536BiaxialWheelTester/Bi-Axial3.jpg",
                        media: <img src="/images/Wheel_End/Model3536BiaxialWheelTester/Bi-Axial3.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Wheel_End/Model3536BiaxialWheelTester/Bi-Axial4.jpg",
                        media: <img src="/images/Wheel_End/Model3536BiaxialWheelTester/Bi-Axial4.jpg"/>,
                    }
                ]               
            },    
            /* Transmission & Driveline */
            axleTestRig : {
                subSection: "Transmission & Driveline",
                title : "Axle Test Rig",
                body :
                <div>
                    <p>Standard fatigue rated actuators have a relatively soft piston rod that is chrome plated.  The chrome plating has a surface hardness of 58-62 Rockwell C. High frequency applications often wear the chrome out quickly, because the base material is too soft.  DTE has worked with advanced seal manufacturers to develop stringent surface finish requirements that will allow the use of harder surface finishes (70-74 Rockwell C for the black coating, and 86-90 Rockwell C for the tungsten carbide coating). These finishes, combined with the harder materials and Teflon seals, result in an actuator that has an extremely long life.</p>
                    <br />
                    <h3>Specifications:</h3>
                    <ul>
                        <li>Two 35 Kip Actuators</li>
                        <li>Two 28 Kip Actuators</li>
                        <li>75GPM hydraulic power unit</li>
                        <li>Two 80 GPM control manifolds</li>
                        <li>4 channels of closed loop control</li>
                        <li>12 channels of data acquisition</li>
                        <li>Block cycle programming</li>
                        <li>Iteration to compensate for a non-linear transfer function</li>
                        <li>Play-back of RPC&reg; and OTF&reg; files</li>
                        <li>12 additional channels of strain-gage data acquisition</li>
                        <li>Full rig control with integrated HPS and HCM</li>
                        <li>Amplitude control</li>
                    </ul>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Transmission_Driveline/AxleTestRig/AxleTestRig1.jpg",
                        media: <img src="/images/Transmission_Driveline/AxleTestRig/AxleTestRig1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Transmission_Driveline/AxleTestRig/AxleTestRig2.jpg",
                        media: <img src="/images/Transmission_Driveline/AxleTestRig/AxleTestRig2.jpg"/>,
                    },
                ]               
            },            
            ballJointBootTestSystem : {
                subSection: "Transmission & Driveline",
                title : "Ball Joint Boot Test Machine",
                body :
                <div>
                    <p>The ball joint boot test machine was designed to meet all the requirements presented by Ford Motor Company’s test for boots protecting ball joints. Similar machines have been made in the past by LINK and have been in operation for many years. They have a history of reliability due to their robust design.</p>                           
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
                            src="/images/Transmission_Driveline/BallJointBootTestSystems/BallJointBootTestMachineVideo.mp4"
                        >
                            <BigPlayButton position="center" />
                        </Player>,
                        backgroundImage : "/images/flat_icons/playThumb.jpg"
                    },
                    {
                        backgroundImage: "/images/Transmission_Driveline/BallJointBootTestSystems/BallJointBootTestMachine1.jpg",
                        media: <img src="/images/Transmission_Driveline/BallJointBootTestSystems/BallJointBootTestMachine1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Transmission_Driveline/BallJointBootTestSystems/BallJointBootTestMachine2.jpg",
                        media: <img src="/images/Transmission_Driveline/BallJointBootTestSystems/BallJointBootTestMachine2.jpg"/>,
                    },
                ]               
            },
            m1158T04Machine : {
                subSection: "Transmission & Driveline",
                title : "M-1158 TO-4 Wet Friction Test Machine",
                body :
                <div>
                    <p>The Model 1158 T0-4 Wet Friction Test Machine is used to conduct performance and durability tests of wet friction clutch plates, spacer plates, and transmission fluids. This incremental inertia dynamometer applies a servo controlled pneumatic force and uses the kinetic energy of a rotating mass friction disc that is absorbed by a stationary steel plate. The system uses the vehicle’s drive train lubricant as the cooling medium. Precision sensors measure shaft speed, torque, force, fluid flow, and temperature. The control system features ProLINK software for computer control, data acquisition, and graphic report generation.</p>
                    <br />
                    <h3>Specifications:</h3>
                    <ul>
                        <li>Software: ProLINK</li>
                        <li>Force: 5200-45,000 N</li>
                        <li>Motor: 37 Kw VFAC, Speed 250-5700 rpm</li>
                        <li>Torque:  0-200 Nm Running, 0-3500 Nm Static</li>
                        <li>Inertia: 0.5-1.5 Kgm2 (7 discs)</li>
                        <li>Flow: 1.0-5.6 lpm</li>
                        <li>Capacity: 19 liters</li>
                        <li>Temperature: 70&deg;-121&deg; C</li>
                    </ul>                            
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Transmission_Driveline/M-1158TO-4Machine/M-1158Machine.jpg",
                        media: <img src="/images/Transmission_Driveline/M-1158TO-4Machine/M-1158Machine.jpg"/>,
                    }
                ]               
            },
            m2190AutoTransHighSpeed : {
                subSection: "Transmission & Driveline",
                title : "Model 2190 Automatic Transmission High Speed Test&nbsp;System",
                body :
                <div>
                    <p>The Model 2190 is designed for durability and performance testing of complete transmission assemblies. It also measures transmission pump efficiency and durability while accommodating a complete line of transaxles and transmissions. Parasitic losses are evaluated for both Front Wheel Drive and Rear Wheel Drive type transmissions.</p>

                    <div className="list-table">
                        <br />
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Durability and performance of complete transmission assemblies</li>
                                <li>Transmission pump efficiency and durability</li>
                            </ul>
                            <ul>
                                <li>The 10,000 rpm capability supports the next generation transmissions being designed today</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Specifications:</h3>
                        <div>
                            <ul>
                                <li>Operating Speed - <br />10,000 rpm continuous (both inputs and outputs)</li>
                                <li>Converter Thrust Load - 2,000 lbs @ 8,000 rpm and 3,000 lbs @ 3,000 rpm</li>
                                <li>Input Torque - 2,000 in-lbs</li>
                                <li>Output Torque - 5,000 in-lbs</li>
                                <li>Converter Temperature - <br />-40&deg; F to 300&deg; F</li>
                            </ul>
                            <ul>
                                <li>Grade Tilt - 0% to 60%: 0&deg; to +38&deg; uphill / -31&deg; downhill</li>
                                <li>Transmission Roll - 0&deg; to 7&deg;</li>
                                <li>System Pressure - 0 to <br />300 psi</li>
                                <li>Oil Flow - 0.1 to 25 gpm</li>
                            </ul>
                        </div>
                    </div>                             
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Transmission_Driveline/M-2190AutoTransHighSpeed/M-2190ATHS1.jpg",
                        media: <img src="/images/Transmission_Driveline/M-2190AutoTransHighSpeed/M-2190ATHS1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Transmission_Driveline/M-2190AutoTransHighSpeed/M-2190ATHS2.jpg",
                        media: <img src="/images/Transmission_Driveline/M-2190AutoTransHighSpeed/M-2190ATHS2.jpg"/>,
                    },
                ]               
            },
            m2909ManualClutchDurability : {
                subSection: "Transmission & Driveline",
                title : "Model 2909 Clutch Durability Test Machine",
                body :
                <div>
                    <p>The Model 2909 Clutch Durability Test Machine is used to measure manual clutch wear over extended operating conditions. Accelerated results of clutch durability may be examined over shorter periods of time and under extreme or typical operating conditions. Characteristics such as wear, slip, travel, and engagement time can be viewed in real-time. The assembly can then be brought to operating velocity and repeatedly cycled to monitor key characteristics over time.</p>

                    <div className="list-table">
                        <br />
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Manual clutch durability</li>
                                <li>Analysis of wear, slip, travel and engagement</li>
                                <li>Disc wear</li>
                                <li>Clutch travel</li>
                            </ul>
                            <ul>
                                <li>Engagement, <br />disengagement load</li>
                                <li>Torque</li>
                                <li>Speed</li>
                                <li>Stroke</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Specifications:</h3>
                        <div>
                            <ul>
                                <li>Speed: Variable from <br />0-4000 rpm</li>
                                <li>Input Drive: 140 hp</li>
                                <li>Input Torque: 400 ft-lb</li>
                                <li>Stroke Force: 300 lb</li>
                            </ul>
                            <ul>
                                <li>Controls: ProLINK software, fully auto- mated process</li>
                                <li>Stroke Velocity: <br />20 inches/second</li>
                            </ul>
                        </div>
                    </div>                              
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Transmission_Driveline/M-2909ManualClutch/M-2909ClutchDurability1.jpg",
                        media: <img src="/images/Transmission_Driveline/M-2909ManualClutch/M-2909ClutchDurability1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Transmission_Driveline/M-2909ManualClutch/M-2909ClutchDurability2.jpg",
                        media: <img src="/images/Transmission_Driveline/M-2909ManualClutch/M-2909ClutchDurability2.jpg"/>,
                    },
                ]               
            },
            m1850SixSquareTestStand : {
                subSection: "Transmission & Driveline",
                title : "M-1850 - Six Square Test Stand",
                body :
                <div>
                    <p>The Model 1850 Six Square Test System is designed to test durability of drive shafts, half-shafts, and universal joints under typical and extreme operating conditions. The Model 1850 provides great flexibility and can be configured to accommodate your test needs.<br /><br />The configuration of the machine allows for constant and uniform torque throughout all shafts at a selected speed even if the specimen’s physical dimensions change. This design facilitates the replication of actual operating conditions.</p>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Automatic or manual control modes</li>
                        <li>Flexible testing configuration</li>
                        <li>Variable speed input</li>
                        <li>Variable system binding torque</li>
                        <li>Hard-geared system</li>
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
                            src="/images/Transmission_Driveline/M-1850SixSquareTestStand/M-1850SSTS5.mp4"
                        >
                            <BigPlayButton position="center" />
                        </Player>,
                        backgroundImage : "/images/flat_icons/playThumb.jpg"
                    },
                    {
                        backgroundImage: "/images/Transmission_Driveline/M-1850SixSquareTestStand/M-1850SSTS1.jpg",
                        media: <img src="/images/Transmission_Driveline/M-1850SixSquareTestStand/M-1850SSTS1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Transmission_Driveline/M-1850SixSquareTestStand/M-1850SSTS2.jpg",
                        media: <img src="/images/Transmission_Driveline/M-1850SixSquareTestStand/M-1850SSTS2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Transmission_Driveline/M-1850SixSquareTestStand/M-1850SSTS3.jpg",
                        media: <img src="/images/Transmission_Driveline/M-1850SixSquareTestStand/M-1850SSTS3.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Transmission_Driveline/M-1850SixSquareTestStand/M-1850SSTS4.jpg",
                        media: <img src="/images/Transmission_Driveline/M-1850SixSquareTestStand/M-1850SSTS4.jpg"/>,
                    },
                ]               
            },
            axleImpactTester : {
                subSection: "Transmission & Driveline",
                title : "Axle Impact Tester",
                body :
                <div>
                    <p>The Axle Impact Tester applies a shock load to the axle drive line. The resulting effect results in a high torque, sudden stop situation that allows users to test the axle drive line. The Axle Impact Tester allows users to apply a destructive load to the drive line, all while maintaining complete control of the situation.</p>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Controlled application of a destructive, extreme load</li>
                        <li>Allows for accelerated tetsing</li>
                        <li>Selectable inertia discs for specific loading</li>
                        <li>Moves along a t-slot and accommodates different sized axles</li>
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
                            src="/images/Transmission_Driveline/AxleImpactTester/AxleImpactTesterVideo.mp4"
                        >
                            <BigPlayButton position="center" />
                        </Player>,
                        backgroundImage : "/images/flat_icons/playThumb.jpg"
                    },
                    {
                        backgroundImage: "/images/Transmission_Driveline/AxleImpactTester/AxleImpactTester1.jpg",
                        media: <img src="/images/Transmission_Driveline/AxleImpactTester/AxleImpactTester1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Transmission_Driveline/AxleImpactTester/AxleImpactTester2.jpg",
                        media: <img src="/images/Transmission_Driveline/AxleImpactTester/AxleImpactTester2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Transmission_Driveline/AxleImpactTester/AxleImpactTester3.jpg",
                        media: <img src="/images/Transmission_Driveline/AxleImpactTester/AxleImpactTester3.jpg"/>,
                    }
                ]               
            },
            twoSquare : {
                subSection: "Transmission & Driveline",
                title : "Two Square Timing Chain Test System",
                body :
                <div>
                    <p>This two-specimen coupled chain test system applies rotation under torque to allow engine-running condition simulation with temperature conditioned ATF fluid.<br /><br />An energy saving system configuration combined with an integrated servo drive and a spinning hydrostatic rotary actuator simulate high power conditions with low energy.</p>
                    <br />
                    <h3>Specifications:</h3>
                    <ul>
                        <li>DC Servo Drive: 5000 RPM, 5 HP</li>
                        <li>Hydraulic Torsion: 1,000 Nm - 800 FT LBS</li>
                        <li>Hydraulic Power Supply: 8 GPM 16 HP </li>
                        <li>Control: PLC - Allen Bradley or Direct Digital Control</li>
                        <li>Speed: 0 to 5000 RPM</li>
                        <li>Torque: Delta P, Reversing Torque</li>
                        <li>Temperature: ATF Fluid</li>
                        <li>Bearing Oil Mist Lubrication</li>
                        <li>Bearing Temperature Monitoring</li>
                        <li>ATF Fluid Flow Monitoring</li>
                        <li>Chain Tension Monitoring</li>
                    </ul>                                
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Transmission_Driveline/TwoSquareTimingChainTestSystem/TwoSquareTimingChainTestSystem1.jpg",
                        media: <img src="/images/Transmission_Driveline/TwoSquareTimingChainTestSystem/TwoSquareTimingChainTestSystem1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Transmission_Driveline/TwoSquareTimingChainTestSystem/TwoSquareTimingChainTestSystem2.jpg",
                        media: <img src="/images/Transmission_Driveline/TwoSquareTimingChainTestSystem/TwoSquareTimingChainTestSystem2.jpg"/>,
                    },
                ]               
            },
            fourSquareDrivelineTestSystem : {
                subSection: "Transmission & Driveline",
                title : "Model 1800 4-Square Driveline Test System",
                body :
                <div>
                    <p>The Model 1800 4-Square Driveline Test System is designed to test durability of drive shafts, half-shafts, and/or universal joints. This machine provides great flexibility and can be configured to accommodate a variety of testing needs. The Model 1800 is capable of testing four drive shafts and eight U-Joints simultaneously in a hard-geared loop. Once this loop is connected, the rotary torque generator can be actuated to rotate one end in respect to the other end, creating a binding torque without using a braking device. It creates constant and uniform torque throughout the components at a selected speed. The Jounce section provides the ability to offset one end of the shaft with respect to the other end, simulating suspension movement, and can be programmed to oscillate at a rate up to 0.5 Hz. By removing the jounce section, it can test two extra-long drive shafts and four U-joints.</p>

                    <table className="list-table">
                        <br />
                        <h3>Key Benefits:</h3>
                        <div>
                            <ul>
                                <li>Can test multiple drive shafts, half shafts, or U-Joints simultaneously</li>
                            </ul>
                            <ul>
                                <li>Uses less energy than a brake-type system</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Specifications:</h3>
                        <div>
                            <ul>
                                <li>Control System: ProLINK software</li>
                                <li>Number of shafts per test: <br />2 or 4</li>
                                <li>Shaft length range: <br />400-2500mm</li>
                                <li>Maximum Shaft Diameter: 160mm</li>
                                <li>Number of U joints per test: <br />4 or 8</li>
                                <li>Static Torque: 20,000 Nm @ <br />0 RPM</li>
                                <li>Dynamic Torque: 20,000 Nm @ 500 RPM</li>
                            </ul>
                            <ul>
                                <li>Drive Shaft: 350mm</li>
                                <li>Jounce Frequency: 0.5 Hz</li>
                                <li>Torque: 150 kN Max</li>
                                <li>Environmental Chamber: <br />5-40&deg;C, 20% - 80% RH, Water &amp; Dust Spray (Optional)</li>
                                <li>Cooling Air Flow: 30 m/s</li>
                                <li>Air Flow Rate: 0-50 m/s</li>
                                <li>Motor: 224 kW AC Variable Speed, 0-6000 RPM</li>
                            </ul>
                        </div>
                    </table>                                
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Transmission_Driveline/Model18004-SquareDrivelineTestSystem/M-1800.jpg",
                        media: <img src="/images/Transmission_Driveline/Model18004-SquareDrivelineTestSystem/M-1800.jpg"/>,
                    }
                ]               
            },
            transmissionTorqueCyclingDurability : {
                subSection: "Transmission & Driveline",
                title : "Model 2090 Transmission Torque Cycling Durability Machine",
                body :
                <div>
                    <p>The Model 2090 is used to determine case and component fatigue for automatic transmissions. It determines the effects of individual component variability with respect to temperature, torque, operating pressure, and part lubrication. Tests are conducted by cycling each gear range at preselected pressures and input/output torque levels.<br /><br />The Torque Cycling Durability Machine is designed to be a low-speed, high input/output (absorption) torque transmission tester. The transmission connects to a drive motor that simulates engine input to an absorption motor that simulates the drive train load. The process employs vehicle specified drive train lubricants as the cooling medium and applied pressures are modulated to obtain controlled outputs in repetitive tests. Transmission failure conditions can be duplicated or predicted in the&nbsp;lab.</p>

                    <div className="list-table">
                        <br />
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Determines case and component fatigue for automatic transmissions</li>
                            </ul>
                            <ul>
                                <li>Torque transmission tester</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Key Benefits:</h3>
                        <div> 
                            <ul>
                                <li>System supports manual and fully automatic operation</li>
                                <li>Block test formats allow ease of operator interface</li>
                            </ul>
                            <ul>
                                <li>The Automatic mode test sequencing may be executed without operator intervention</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Specifications:</h3>
                        <div>
                            <ul>
                                <li>Speed: 1-30 rpm</li>
                                <li>Input Torque: 5000 lb-ft</li>
                                <li>Output Torque: 2000 lb-ft</li>
                            </ul>
                            <ul>
                                <li>Oil Flow: 15 gpm</li>
                                <li>Oil Temperature: 0 – 300&deg;F</li>
                                <li>Oil Pressure: 0-350 psi</li>
                            </ul>
                        </div>
                    </div>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Transmission_Driveline/Model2090TransmissionTorqueCyclingDurabilityMachine/M-2090.jpg",
                        media: <img src="/images/Transmission_Driveline/Model2090TransmissionTorqueCyclingDurabilityMachine/M-2090.jpg"/>,
                    }
                ]               
            },  
            saeNo2TestStand : {
                subSection: "Transmission & Driveline",
                title : "Model 3100 SAE No. 2 Test Stand",
                body :
                <div>
                    <p>The Model 3100 SAE No. 2 Test Stand is designed to perform standard SAE and developmental wet friction testing. This system is designed to test clutch and band systems utilizing production hardware and fluids. This machine incorporates the latest technology for optimal testing versatility and correlation to actual powertrain operating conditions.<br /><br />The Model 3100 is an inertia dynamometer in which the kinetic energy of a rotating mass is dissipated by the clutch or band being tested. Torque is measured via dual load cells mounted on dual torque arms attached to the test head.</p>

                    <div className="list-table">
                    <br />
                    <h3>Specifications:</h3>
                        <div>
                            <ul>
                                <li>Test Head Max. Friction Plate Diameter: 241 mm (9.5")</li>
                                <li>Test Head Max. Pack Thickness: 33 mm (1.3")</li>
                                <li>Main Drive Motor Power: 75 kW (100 HP) AC motor</li>
                                <li>Main Drive Motor Speed: 3550/6000 rpm</li>
                            </ul>
                            <ul>
                                <li>Continuous Rotation System Power: 22 kW (30 HP)</li>
                                <li>Continuous Rotation System Speed Range: 0-300 rpm</li>
                                <li>Torque Range: 0-1132 Nm (0-835 lb-ft)</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Test Article:</h3>
                        <div>
                            <ul>
                                <li>Friction material &amp; ATF friction characterization</li>
                                <li>Automatic transmission clutches</li>
                                <li>Automatic transmission bands</li>
                            </ul>
                            <ul>
                                <li>Automatic transmission torque converter clutches</li>
                                <li>Manual transmission synchronizer rings</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Test Procedures:</h3>
                        <ul>
                            <li>
                                <p>Standard SAE and developmental wet friction testing <br />on clutch and band systems</p>
                            </li>
                        </ul>
                    </div>                                
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Transmission_Driveline/Model3100SAENO2TestStand/M-3100SAENO2TestStand1.jpg",
                        media: <img src="/images/Transmission_Driveline/Model3100SAENO2TestStand/M-3100SAENO2TestStand1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Transmission_Driveline/Model3100SAENO2TestStand/M-3100SAENO2TestStand2.jpg",
                        media: <img src="/images/Transmission_Driveline/Model3100SAENO2TestStand/M-3100SAENO2TestStand2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Transmission_Driveline/Model3100SAENO2TestStand/M-3100SAENO2TestStand3.jpg",
                        media: <img src="/images/Transmission_Driveline/Model3100SAENO2TestStand/M-3100SAENO2TestStand3.jpg"/>,
                    }                    
                ]               
            },
            electricVehicleMotorDrivelineTestStand : {
                subSection: "Transmission & Driveline",
                title : "Model 4298 Electric Vehicle Motor and Driveline Test Stand",
                body :
                <div>
                    <p>The Model 4298 Electric Vehicle and Driveline Dynamometer provides capability for performance and durability testing of electric vehicle motors or (hybrid) drive units. This machine provides the ability to reproduce a wide range of road driving conditions and is suitable for testing EV/HEV/PHEV products.<br /><br />This dynamometer is specifically designed for drive train testing of electric motors. Extra care is taken to provide optimum test conditions. The motors are mounted on a very stiff mounting platform with very stiff attachment brackets. The high speed gearbox has separate lubrication to optimize running conditions. The gearbox contains technology adapted from fast turning aviation accessory drives.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Performance and durability testing of electric vehicle motors <br />or driveline units</li>
                        <li>Drive train testing of electric motors</li>
                    </ul>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Customizable torque and speed tests with automatic <br />pass/fail results</li>
                        <li>Easy data acquisition</li>
                        <li>Extra care taken to provide optimum test conditions</li>
                        <li>Motors mounted on a very stiff mounting platform</li>
                        <li>High speed gear box has separate lubrication to optimize <br />running conditions</li>
                    </ul>                                 
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Transmission_Driveline/Model4298ElectricVehicleMotorDrivelineTestStand/M-4298.jpg",
                        media: <img src="/images/Transmission_Driveline/Model4298ElectricVehicleMotorDrivelineTestStand/M-4298.jpg"/>,
                    } 
                ]               
            },
            /* Springs */
            digitalSULunit : {
                subSection: "Springs",
                title : "Digital SUL Unit",
                body :
                <div>
                    <p>The Digital Squareness Under Load (SUL) unit tests compression springs for the accuracy of grinding and to determine the true performance of a ground end spring when functioning at its operational load or compressed height.<br /><br />Squareness Under Load testing is simple with the LINK DSUL. The operator merely needs to apply the test load and read the resultant angle on the Model 3700 Display Module.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Squareness Under Load (SUL)</li>
                    </ul>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>1500 ppr encoders for accurate measurement</li>
                        <li>Large platen accommodates a variety of spring diameters</li>
                    </ul>
                    <br />
                    <h3>Standard Specifications:</h3>
                    <ul>
                        <li>Encoders: 1500 ppr (2)</li>
                        <li>Platen size: 76 mm (3 in)</li>
                        <li>Compatible Spring Tester Models: Models T4B and EL4</li>
                    </ul>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Springs/DigitalSULUnit/DigitalSULUnit1.jpg",
                        media: <img src="/images/Springs/DigitalSULUnit/DigitalSULUnit1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Springs/DigitalSULUnit/DigitalSULUnit2.jpg",
                        media: <img src="/images/Springs/DigitalSULUnit/DigitalSULUnit2.jpg"/>,
                    },
                ]               
            },  
            mEL1SpringTester : {
                subSection: "Springs",
                title : "Model EL1 Spring Tester",
                body :
                <div>
                    <p>The Model EL1 Spring Tester is a precision instrument designed to provide accurate test results for low load springs and resilient materials. Rugged construction and high precision make this a durable device for accurate compression and optional tension testing of springs, spring forms, and resilient materials.<br /><br />This tester utilizes the Model 3700 Display Module that offers a real time display of load and height measurements, along with data collection of several key spring testing parameters that can be displayed on the Module or output to a computer for generation of real-time load graphs, evaluation with third party SPC software, and data storage.</p>

                    <div className="list-table">
                        <br />
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Compression</li>
                                <li>Tension</li>
                            </ul>

                            <ul>
                                <li>Squareness Under Load</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Key Benefits:</h3>
                        <div>
                            <ul>
                                <li>Low cost, laboratory grade spring tester</li>
                                <li>Digital display for load and height</li>
                            </ul>

                            <ul>
                                <li>Automatic load cell deflection compensation</li>
                                <li>Simple operation</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Standard Specifications:</h3>
                        <div>
                            <ul>
                                <li>Operating Voltage: 95 Vac to 250 Vac, 50/60 Hz</li>
                                <li>Load Cell Range: 2.3 kg (5 lb) up to 11 kg (25 lb)</li>
                                <li>Load Cell Specification (Total Error): &plusmn;0.0250% of rated output</li>
                            </ul>
                            <ul>
                                <li>Daylight Opening (Maximum): 101 mm (4 in)</li>
                                <li>Stroke: 50 mm (2 in)</li>
                                <li>Height Resolution: 0.05 mm (0.002 in)</li>
                            </ul>
                        </div>
                    </div>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Springs/M-EL1SpringTester/M-EL1.jpg",
                        media: <img src="/images/Springs/M-EL1SpringTester/M-EL1.jpg"/>,
                    }
                ]               
            },
            m0873SULMasterRingSet : {
                subSection: "Springs",
                title : "M-0873 SUL Master Ring Set",
                body :
                <div>
                    <p>The Master Ring Set is used by customers to calibrate or validate Squareness Under Load (SUL) angle readings on the LINK SUL unit and LINK Digital SUL unit.<br /><br />Each of the four rings in the set is ground to a specific angle to check the accuracy of the SUL device.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Squareness Under Load calibration and validation</li>
                    </ul>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Validates accuracy of SUL and Digital SUL units between calibrations</li>
                    </ul>
                    <br />
                    <h3>Standard Specifications:</h3>
                    <ul>
                        <li>Master Rings (set of 4): 1.0&deg;, 2.0&deg;. 3.0&deg;, 4.0&deg;</li>
                    </ul>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Springs/M-0873SULMasterRingSet/M-0873.jpg",
                        media: <img src="/images/Springs/M-0873SULMasterRingSet/M-0873.jpg"/>,
                    }
                ]               
            },
            m3700DisplayModule : {
                subSection: "Springs",
                title : "Model 3700 Display Module",
                body :
                <div>
                    <p>The Model 3700 Display Module works in conjunction with electronic compression, tension, and torsion spring testers and is used to collect and display spring tester data. The module also functions as a controller when paired with a LINK motorized spring tester.<br /><br />The Display Module can be connected to a laptop or PC to display real time load curves. An optional printer allows the Module to automatically print out the test results at the end of each test cycle.</p>

                    <div className="list-table">
                        <br />
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Compression</li>
                                <li>Tension</li>
                            </ul>
                            <ul>
                                <li>Squareness Under Load (SUL)</li>
                                <li>Lateral Load</li>
                            </ul>
                        </div>
                        <br />     
                        <h3>Key Benefits:</h3>
                        <div>
                            <ul>
                                <li>Save and recall test parameters for each spring</li>
                                <li>Save data to computer</li>
                            </ul>
                            <ul>
                                <li>Save load/unload curves for use in reports</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Standard Specifications:</h3>
                        <div>
                            <ul>
                                <li>Compatible Spring Tester Models: T Series, EL Series, Dual Post, and Single Post (Compatibility with spring testers manufactured by other suppliers should be evaluated by LINK prior to ordering)</li>
                                <li>Compatible SPC Software Packages: DataMyte, SPC-IV with Real-Time Gage Module</li>
                            </ul>
                            <ul>
                                <li>Power Input: 1&Phi; (line cord), 95 Vac to 250 Vac, 47 Hz to <br />63 Hz</li>
                            </ul>
                        </div>
                    </div>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Springs/M-3700DisplayModule/M-3700.jpg",
                        media: <img src="/images/Springs/M-3700DisplayModule/M-3700.jpg"/>,
                    }
                ]               
            },
            mT4ASpringTester : {
                subSection: "Springs",
                title : "Model T4A Spring Tester",
                body :
                <div>
                    <p>The Model T4A Spring Tester offers a low cost version spring tester that provides laboratory grade results. Rugged construction and high precision make this a durable device for accurate compression and optional tension testing of springs, spring forms, and resilient materials.</p>
                    <div className="list-table">
                        <br />
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Compression</li>
                                <li>Tension</li>
                            </ul>
                            <ul>
                                <li>Squareness Under Load (SUL)</li>
                            </ul>
                        </div>
                        <br />    
                        <h3>Key Benefits:</h3>
                        <div>
                            <ul>
                                <li>Low cost, laboratory grade spring tester</li>
                                <li>Digital display for load and height</li>
                                <li>Direct mount platen for accurate load data</li>
                            </ul>
                            <ul>
                                <li>Automatic load cell deflection compensation</li>
                                <li>Simple operation</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Standard Specifications:</h3>
                        <div>
                            <ul>
                                <li>Operating Voltage: 90 Vac to 255 Vac, 50/60 Hz</li>
                                <li>Load Cell Range: 20 kg (44 lb) up to 150 kg (330 lb)</li>
                                <li>Load Cell Specification (Total Error): &plusmn;0.0200% of rated output</li>
                            </ul>
                            <ul>
                                <li>Daylight Opening (Maximum): 241 mm (9.5 in) option 304 mm (12 in)</li>
                                <li>Stroke: 178 mm (7 in)c</li>
                                <li>Height Resolution: 0.025 mm (0.001 in)</li>
                            </ul>
                        </div>
                    </div>                           
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Springs/M-T4ASpringTester/M-T4A.jpg",
                        media: <img src="/images/Springs/M-T4ASpringTester/M-T4A.jpg"/>,
                    }
                ]               
            },
            mT4BSpringTester : {
                subSection: "Springs",
                title : "Model T4B Spring Tester",
                body :
                <div>
                    <p>The Model T4B Spring Tester is a versatile, high accuracy version that provides laboratory grade results. Rugged construction and high precision make this a durable device for accurate compression and optional tension testing of springs, spring forms, and resilient materials.<br /><br />This tester utilizes the Model 3700 Display Module that offers a real time display of load and height measurements, along with data collection of several key spring testing parameters that can be displayed on the Module or output to a computer for generation of real-time load graphs, evaluation with third party SPC software, and data storage.</p>

                    <div className="list-table">
                        <br />
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Compression</li>
                                <li>Tension</li>
                            </ul>
                            <ul>
                                <li>Squareness Under Load (SUL)</li>
                                <li>Lateral Load</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Key Benefits:</h3>
                        <div>
                            <ul>
                                <li>Pass-through load or height capture</li>
                                <li>Automatic spring rate calculation</li>
                                <li>Spring classification</li>
                            </ul>
                            <ul>
                                <li>Direct mount platen for accurate load data</li>
                                <li>Automatic load cell deflection compensation</li>
                                <li>Simple operation</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Standard Specifications:</h3>
                        <div>
                            <ul>
                                <li>Operating Voltage: 95 Vac to 250 Vac, 50/60 Hz</li>
                                <li>Load Cell Range: 20 kg (44 lb) up to 150 kg (330 lb)</li>
                                <li>Load Cell Specification (Total Error): &plusmn;0.0200% of rated output</li>
                            </ul>
                            <ul>
                                <li>Daylight Opening (Maximum): 241 mm (9.5 in) option <br />304 mm (12 in)</li>
                                <li>Stroke: 177 mm (7 in)</li>
                                <li>Height Resolution: 0.025 mm (0.001 in)</li>
                            </ul>
                        </div>
                    </div>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Springs/ModelT4BSpringTester/M-T4B.jpg",
                        media: <img src="/images/Springs/ModelT4BSpringTester/M-T4B.jpg"/>,
                    }
                ]               
            },
            mt4xySpringTester : {
                subSection: "Springs",
                title : "Model T4-XY Spring Tester",
                body :
                <div>
                    <p>The Model T4-XY Spring Tester tests axial and lateral loads of coil springs under compression. The T4-XY utilizes ProLINK software to provide signal conditioning for the inputs and display height, axial load, and the X- , Y- or resultant lateral load. The user is able to configure a display module which offers the capability to carry out our patented pass-through testing. Spring rate is computed automatically, and measurements can be displayed in either English or Metric units.</p>

                    <div className="list-table">
                        <br />
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Compression</li>
                            </ul>
                            <ul>
                                <li>Lateral Load</li>
                            </ul>
                        </div>
                        <br />   
                        <h3>Key Benefits:</h3>
                        <div>
                            <ul>
                                <li>Resultant load vector is graphically displayed</li>
                                <li>X-, Y-, and Z- loads are displayed</li>
                                <li>Pass-through load or height capture</li>
                                <li>Automatic spring rate calculation</li>
                            </ul>
                            <ul>
                                <li>Spring classification</li>
                                <li>Direct mount platen for accurate load data</li>
                                <li>Automatic load cell deflection compensation</li>
                                <li>Simple operation</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Standard Specifications:</h3>
                        <div>
                            <ul>
                                <li>Operating Voltage: 95 Vac to 250 Vac, 50/60 Hz</li>
                                <li>Load Cell Range (Axial): 20 kg (44 lb) up to 150 kg (330 lb)</li>
                                <li>Load Cell Specification <br />(Total Error): &plusmn;0.0200% of rated output</li>
                            </ul>
                            <ul>
                                <li>Daylight Opening (Maximum): 241 mm (9.5 in) option <br />304 mm (12 in)</li>
                                <li>Stroke: 177 mm (7 in)</li>
                                <li>Height Resolution: 0.025 mm (0.001 in)</li>
                            </ul>
                        </div>
                    </div>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Springs/ModelT4-XYSpringTester/M-T4-XY1.jpg",
                        media: <img src="/images/Springs/ModelT4-XYSpringTester/M-T4-XY1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Springs/ModelT4-XYSpringTester/M-T4-XY2.jpg",
                        media: <img src="/images/Springs/ModelT4-XYSpringTester/M-T4-XY2.jpg"/>,
                    },
                ]               
            },
            /* Servo Dynamics */
            actuatorsLinear : {
                subSection: "Servo Dynamics",
                title : "Hydrostatic Bearing Actuators",
                body :
                <div>
                    <p>Fatigue rated actuators are used in applications too demanding for industrial cylinders.  They have increased reliability in high frequency, high velocity applications, and where higher side loads cannot be avoided.<br /><br />The industrial cylinder is a cost effective solution for most industrial applications. In situations where increased reliability is required, LINK engineers can work with you to recommend alternative forms of construction for improved life. Some of the tools we have available include:</p>
                    <ul>
                        <li>Hydrostatic Bearings for high side load resistance and reduced friction/stick-slip.</li>
                        <li>Tungsten Replaces Chrome: The tungsten rod coating has proven itself to outlast chrome piston rods in many applications. Lubrication is required for long seal life. Chrome rods tend to “polish”, the lubrication goes away, and seals fail. The tungsten rod maintains the proper surface finish, maintaining consistent lubrication, which improves seal life.</li>
                        <li>Air bearing to replace low pressure seals: For applications demanding extremely low friction or frequencies above 250 Hz. Dynamic Testing can supply high pressure hydraulic cylinders with no elastomeric seals. The piston sealing is similar in concept to a spool valve. A labyrinth seal is used for sealing the high pressure fluid with minimal flow to the gland drain port.</li>
                        <li>Preloaded-Zero backlash swivels and ball joints: Standard spherical bearings have clearance which contributes to problems in motion control systems. Therefore, we manufacture swivels with an adjustable preload and ball joints with zero backlash, so no bolted joint is subjected to dynamic loading.</li>
                    </ul>                          
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Servo_Dynamics/Actuators_Linear/LinearActuator1.jpg",
                        media: <img src="/images/Servo_Dynamics/Actuators_Linear/LinearActuator1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/Actuators_Linear/LinearActuator2.jpg",
                        media: <img src="/images/Servo_Dynamics/Actuators_Linear/LinearActuator2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/Actuators_Linear/LinearActuator3.jpg",
                        media: <img src="/images/Servo_Dynamics/Actuators_Linear/LinearActuator3.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/Actuators_Linear/LinearActuator4.jpg",
                        media: <img src="/images/Servo_Dynamics/Actuators_Linear/LinearActuator4.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/Actuators_Linear/LinearActuator5.jpg",
                        media: <img src="/images/Servo_Dynamics/Actuators_Linear/LinearActuator5.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/Actuators_Linear/LinearActuator6.jpg",
                        media: <img src="/images/Servo_Dynamics/Actuators_Linear/LinearActuator6.jpg"/>,
                    },

                ]               
            },
            actuatorsRotary : {
                subSection: "Servo Dynamics",
                title : "Fatigue Rated Rotary Actuators",
                body :
                <div>
                    <p>Model RSA - Stationary rotary actuators - The design is a base mounted actuator with an attached servo valve manifold and single or dual servo valves. Standard displacement is +/- 50 degrees. The rotor is provided with a flange output with a hydraulic mounted 1:50 cone.<br /><br />Model RRA - Rotating or spinning rotary actuators - Spinning torsion actuators are designed for rotating applications as inertia reacted vibration systems or self-reacting four square systems. The actuators are vane – type of design with rotors and cylinders are machined off a single piece of material, case hardened, and fatigue rated. Radial load is carried by special low friction roller bearings and the trust load by hydrostatic bearings.<br /><br />Non-contacting sealing systems with the hydrostatic bearings guaranty a high resolution, high dynamic response and very long service life. The spinning version has a special designed hydraulic pressure balanced  bearing, rotating commutator coupled to supply the oil from the stationary servo valve to the rotating actuator.</p>       
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Servo_Dynamics/Actuators_Rotary/RotaryActuator1.jpg",
                        media: <img src="/images/Servo_Dynamics/Actuators_Rotary/RotaryActuator1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/Actuators_Rotary/RotaryActuator2.jpg",
                        media: <img src="/images/Servo_Dynamics/Actuators_Rotary/RotaryActuator2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/Actuators_Rotary/RotaryActuator3.jpg",
                        media: <img src="/images/Servo_Dynamics/Actuators_Rotary/RotaryActuator3.jpg"/>,
                    }
                ]               
            },
            ballJoints : {
                subSection: "Servo Dynamics",
                title : "Fatigue Rated Ball Joints",
                body :
                <div>
                    <p>The Fatigue Rated Ball Joints allow 360 degrees of rotational freedom and up to 20 degrees of angular displacement. The ball joints can also reduce side loads induced on the actuator due to traverse forces and bending moments.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Applied to the stationary end of an actuator</li>
                        <li>Applied to the rod end</li>
                        <li>Adapt to common load cells eliminating the need for additional components</li>
                    </ul>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Compact design</li>
                        <li>Operate without backlash</li>
                        <li>Wide range of applications</li>
                        <li>Low friction coatings</li>
                    </ul>
                    <br />
                    <h3>Specifications:</h3>
                    <ul>
                        <li>5.5, 12, 25, 55 and 110 kip force ratings</li>
                        <li>High load carrying capability</li>
                        <li>Adjustable bearing flanges</li>
                        <li>Fitted for lubrication</li>
                    </ul>       
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Servo_Dynamics/BallJoints/BallJoint1.jpg",
                        media: <img src="/images/Servo_Dynamics/BallJoints/BallJoint1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/BallJoints/BallJoint2.jpg",
                        media: <img src="/images/Servo_Dynamics/BallJoints/BallJoint2.jpg"/>,
                    },
                ]               
            },
            crossPortBleedPlates : {
                subSection: "Servo Dynamics",
                title : "Cross Port Bleed Value",
                body :
                <div>
                    <p>Cross-Port Bleed valves can be used to provide damping and stabilizing high capacitance test systems. The thru-hole plate mounts directly under the servo valve, and includes O-rings.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Damping and stabilizing</li>
                    </ul>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>High strength</li>
                        <li>Sensitive adjustment</li>
                        <li>Many different servo valve patterns</li>
                    </ul>       
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Servo_Dynamics/CrossPortBleedPlates/CrossPortBleedPlates1.jpg",
                        media: <img src="/images/Servo_Dynamics/CrossPortBleedPlates/CrossPortBleedPlates1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/CrossPortBleedPlates/CrossPortBleedPlates2.jpg",
                        media: <img src="/images/Servo_Dynamics/CrossPortBleedPlates/CrossPortBleedPlates2.jpg"/>,
                    },
                ]               
            },
            testController3500 : {
                subSection: "Servo Dynamics",
                title : "3500 Test Controller",
                body :
                <div>
                    <p>The 3500 Test Controller is designed to provide long term stability so users can benefit from technological improvements without continual capital investment and controller obsolescence. It comes with many different options that can be customized to meet your specific needs.</p>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Long service life due to the hardware being easy to update</li>
                        <li>High flexibility</li>
                        <li>Simple to use</li>
                        <li>Safety regulations are easy to program</li>
                        <li>Multi-station control</li>
                    </ul>      
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Servo_Dynamics/3500TestController/3500TestController1.jpg",
                        media: <img src="/images/Servo_Dynamics/3500TestController/3500TestController1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/3500TestController/3500TestController2.jpg",
                        media: <img src="/images/Servo_Dynamics/3500TestController/3500TestController2.jpg"/>,
                    },
                    ,
                    {
                        backgroundImage: "/images/Servo_Dynamics/3500TestController/3500TestController3.jpg",
                        media: <img src="/images/Servo_Dynamics/3500TestController/3500TestController3.jpg"/>,
                    }
                ]               
            },
            hydraulicControlManofolds : {
                subSection: "Servo Dynamics",
                title : "Hydraulic Control Manifold",
                body :
                <div>
                    <p>LINK’s HCM product line offers robust, flexible and dependable solutions for controlling hydraulic power to your test systems. They are designed specifically to meet each customer’s unique need.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Test systems requiring a single actuator with a single valve</li>
                        <li>For use when one actuator has a higher flow capacity</li>
                        <li>For use with multiple actuators</li>
                    </ul>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Easy to use</li>
                        <li>Ports are clearly labeled</li>
                        <li>Wrench clearances were considered in the design</li>
                        <li>Size and specifications to meet particular needs</li>
                        <li>Worldwide service capabilities</li>
                    </ul>      
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Servo_Dynamics/HydraulicControlManifolds/HydraulicControlManifold1.jpg",
                        media: <img src="/images/Servo_Dynamics/HydraulicControlManifolds/HydraulicControlManifold1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/HydraulicControlManifolds/HydraulicControlManifold2.jpg",
                        media: <img src="/images/Servo_Dynamics/HydraulicControlManifolds/HydraulicControlManifold2.jpg"/>,
                    },
                ]               
            },
            hydraulicPowerSupply : {
                subSection: "Servo Dynamics",
                title : "Hydraulic Power Supply",
                body :
                <div>
                    <p>LINK’s Hydraulic Power Supply product line offers robust, flexible, and dependable solutions for supplying hydraulic power to your test systems. Multiple models are available to meet each customer’s unique needs.</p>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Customizable to fit your needs</li>
                        <li>Low noise levels</li>
                        <li>Green, earth-friendly design</li>
                        <li>The Hydraulic Control Manifold can be incorporated into the Hydraulic Power Supply for increased benefits</li>
                        <li>Reduced floor space</li>
                        <li>Increased simplicity</li>
                    </ul>      
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Servo_Dynamics/HydraulicPowerSupply/HydraulicPowerSupply1.jpg",
                        media: <img src="/images/Servo_Dynamics/HydraulicPowerSupply/HydraulicPowerSupply1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/HydraulicPowerSupply/HydraulicPowerSupply2.jpg",
                        media: <img src="/images/Servo_Dynamics/HydraulicPowerSupply/HydraulicPowerSupply2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/HydraulicPowerSupply/HydraulicPowerSupply3.jpg",
                        media: <img src="/images/Servo_Dynamics/HydraulicPowerSupply/HydraulicPowerSupply3.jpg"/>,
                    },
                ]               
            },
            loadCalibrationStand : {
                subSection: "Servo Dynamics",
                title : "Calibration Stand",
                body :
                <div>
                    <p>For Test labs which do their calibration in house, DTE provides load cell calibration stands to provide controlled accurate loading during calibration.</p>
                    <br />
                    <h3>Features:</h3>
                    <ul>
                        <li>Spherical slack adapters minimize side and moments which can affect readings</li>
                        <li>Adjustable for wide range of transducers</li>
                        <li>No Electrical Power Required</li>
                        <li>Precision intensifiers for accurate adjustability of load</li>
                        <li>Table top unit and floor mounted units available</li>
                    </ul>       
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Servo_Dynamics/LoadCalibrationStand/LoadCalibrationStand1.jpg",
                        media: <img src="/images/Servo_Dynamics/LoadCalibrationStand/LoadCalibrationStand1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/LoadCalibrationStand/LoadCalibrationStand2.jpg",
                        media: <img src="/images/Servo_Dynamics/LoadCalibrationStand/LoadCalibrationStand2.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/LoadCalibrationStand/LoadCalibrationStand3.jpg",
                        media: <img src="/images/Servo_Dynamics/LoadCalibrationStand/LoadCalibrationStand3.jpg"/>,
                    },
                ]               
            },
            spiralWashers : {
                subSection: "Servo Dynamics",
                title : "Spiral Washers",
                body :
                <div>
                    <p>Spiral washers are designed for use with a stud for creating a fatigue rated connection from the actuator to load carrying elements such as load cells, ball joints, and swivels.<br /><br />A fatigue rated connection is defined as a connection that is preloaded above the cyclical load value, therefore the connection is not subject to fatigue. Traditionally, the fatigue rated connection is viewed as two springs in parallel, the stiff spring is the spiral washer and the softer spring is the stud.<br /><br />By applying a preload to the stud, which is higher than the actuators operating range, the load train will be subjected to only a static, not cyclical load. LINK uses spiral washers on all actuator connections larger than 5500 Lb. (25kN).</p>       
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Servo_Dynamics/SpiralWashers/SpiralWashers1.jpg",
                        media: <img src="/images/Servo_Dynamics/SpiralWashers/SpiralWashers1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/SpiralWashers/SpiralWashers2.jpg",
                        media: <img src="/images/Servo_Dynamics/SpiralWashers/SpiralWashers2.jpg"/>,
                    },
                ]               
            },
            swivels : {
                subSection: "Servo Dynamics",
                title : "Fatigue Rated Swivel Joints",
                body :
                <div>
                    <p>The Fatigue Rated Swivel Joints allow 180 degrees of rotational freedom and up to 30 degrees of angular tilting displacement. The swivel joints can also reduce side loads induced on the actuator due to traverse forces and bending moments.<br /><br />The swivel joints are fatigue rated, compact, and backlash free. They utilize a precision ground, hardened steel shaft, properly sized spherical bearing, reducing friction, and providing long life. The backlash preload is adjustable to meet certain requirements of specific applications.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Applied to stationary end of an actuator</li>
                        <li>Applied to the rod end</li>
                        <li>Adapts to common load cells eliminating the need for additional components</li>
                    </ul>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Compact design</li>
                        <li>Operate without backlash</li>
                        <li>Wide range of applications</li>
                        <li>Low friction oil sealed bearings</li>
                        <li>Multiple kip force ratings</li>
                        <li>High load carrying capability</li>
                        <li>Adjustable backlash feature</li>
                        <li>Lubrication for optimum output</li>
                    </ul>       
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Servo_Dynamics/Swivels/Swivels1.jpg",
                        media: <img src="/images/Servo_Dynamics/Swivels/Swivels1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/Swivels/Swivels2.jpg",
                        media: <img src="/images/Servo_Dynamics/Swivels/Swivels2.jpg"/>,
                    },
                ]               
            },
            tableTopLoadFrame : {
                subSection: "Servo Dynamics",
                title : "Table Top Load Frame",
                body :
                <div>
                    <p>The Table Top Load Frame is a compact and affordable testing system with both static and dynamic loading capabilities. It can be engaged in a variety of tests, and it has improved accuracy at low speeds due to low friction hydrostatic bearings.</p>

                    <div className="list-table">
                        <br />
                        <h3>The Standard System Includes:</h3>
                        <div>
                            <ul>
                                <li>Hydraulic lifts</li>
                                <li>Accumulators</li>
                                <li>Solenoid valve to isolate inlet pressure</li>
                                <li>Servo valve</li>
                            </ul>
                            <ul>
                                <li>Load cell</li>
                                <li>Concentric LVDT</li>
                                <li>Industry standard wiring and connections</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Tension</li>
                                <li>Compression</li>
                            </ul>
                            <ul>
                                <li>Bend</li>
                                <li>Fatigue</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Key Benefits:</h3>
                        <div>
                            <ul>
                                <li>The frame has high stiffness and low mass resulting in a high natural frequency, allowing a wide testing range</li>
                                <li>A polymer coated plain or hydrostatic actuator is integrated in the base plate increasing the lateral stiffness</li>
                            </ul>
                            <ul>
                                <li>Side mounted lift actuators adjust the crosshead working space</li>
                                <li>The controller for the Table Top Load Frame provides a robust system with an unmatched ease of use</li>
                            </ul>
                        </div>
                    </div>       
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Servo_Dynamics/TableTopLoadFrame/TableTopLoadFrame.jpg",
                        media: <img src="/images/Servo_Dynamics/TableTopLoadFrame/TableTopLoadFrame.jpg"/>,
                    }
                ]               
            },
            deltaPThruHoleMountingPlate : {
                subSection: "Servo Dynamics",
                title : "Delta-P Thru Hole Mounting Plates",
                body :
                <div>
                    <p>Delta-P transducers can be utilized in an active damping control loop to stabilize high capacitance systems.</p>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>High strength</li>
                        <li>Many different servo valve patters</li>
                    </ul>
                    <br />
                    <h3>Design:</h3>
                    <ul>
                        <li>Valve Pattern - Moog G761 or 76 series - S04 pattern</li>
                        <li>Valve Pattern - Moog 72 or 79100 series - S06 pattern</li>
                        <li>Valve Pattern - Moog 79-200 series - S78 pattern</li>
                    </ul>
                    <br />
                    <h3>Wiring:</h3>
                    <ul>
                        <li>PT06A8-4S MS Connector</li>
                        <li>A = EXE+</li>
                        <li>B = Signal+</li>
                        <li>C = Signal-</li>
                        <li>D = EXE-</li>
                    </ul>       
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Servo_Dynamics/Delta-P/Delta-P.jpg",
                        media: <img src="/images/Servo_Dynamics/Delta-P/Delta-P.jpg"/>,
                    }
                ]               
            },
            highStrengthStuds : {
                subSection: "Servo Dynamics",
                title : "High Strength Studs",
                body :
                <div>
                    <p>The high strength studs are used to connect accessory items such as load cells, swivels, or ball joints to the actuators.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Component of many machines</li>
                    </ul>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>High strength</li>
                        <li>Imperial threads to class 3A</li>
                        <li>Metric threads to class 6g</li>
                        <li>No stress concentrations</li>
                    </ul>       
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Servo_Dynamics/HighStrengthStuds/HighStrengthStuds.jpg",
                        media: <img src="/images/Servo_Dynamics/HighStrengthStuds/HighStrengthStuds.jpg"/>,
                    }
                ]               
            },
            hydraulicPiping : {
                subSection: "Servo Dynamics",
                title : "Hydraulic Piping",
                body :
                <div>
                    <p>LINK has years of experience supplying and installing non-welded hydraulic piping systems. The flared joint system incorporates flaring the pipe ends to 10 degrees and utilizing two internal cones. These include one O-Ring face cone flange with an SAE O-Ring, and one flat face cone flange. External code 61 4- bolt flanges are used to connect the pipes when tightened, forming an interference fit.<br /><br />The connections conform to SAE Flanges along with metric ANSI and DIN flanges. The connections have only one method of attaching flanges to pipe, which is by a 10-degree flare. The cone flares the pipe 10 degrees regardless of the system pressure, the pipe size, the wall thickness, or the flange rating. All pipe sizes and wall thicknesses are flared the same way. All tooling is portable and low maintenance.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Commission and operation of laboratory test equipment</li>
                    </ul>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Cost saving installation</li>
                        <li>Time saving installation and use</li>
                        <li>High quality</li>
                        <li>Long component life, 10+ years with no leaks</li>
                        <li>Eliminates need for environmentally unsafe fluids</li>
                    </ul>       
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Servo_Dynamics/HydraulicPiping/HydraulicPiping1.jpg",
                        media: <img src="/images/Servo_Dynamics/HydraulicPiping/HydraulicPiping1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/HydraulicPiping/HydraulicPiping2.jpg",
                        media: <img src="/images/Servo_Dynamics/HydraulicPiping/HydraulicPiping2.jpg"/>,
                    },
                ]               
            },
            hydrostaticBearingActuators : {
                subSection: "Servo Dynamics",
                title : "Hydrostatic Bearing Actuators",
                body :
                <div>
                    <p>Hydrostatic bearings are used to support the piston rod, which creates an actuator with extremely high side load capabilities. This is possible because the hydrostatic bearing is "self-compensating" in that the hydraulic forces will change to counteract any side-load and maintain consistent lubrication to the rod bearing assembly. This results in a very low friction actuator, for very high speed and high frequency capabilities, in addition to its high side load resistance. The bearings are designed for minimal frictional losses, with less than 5 lbs. of force being required to move the actuator at 3000 PSI.</p>

                    <div className="list-table">
                        <br />
                        <h3>Applications:</h3>
                        <div>
                            <ul>
                                <li>Elastomer testing</li>
                                <li>4-poster road simulators</li>
                                <li>Solenoid valve to isolate inlet pressure</li>
                            </ul>
                            <ul>
                                <li>100 Hz+ applications</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Key Benefits:</h3>
                        <div> 
                            <ul>
                                <li>Extremely large projected area for the bearing which reduces the stresses on the load carrying surface</li>
                                <li>High side load capability with extremely long life</li>
                            </ul>
                            <ul>
                                <li>Optimized design for high stiffness and low fluid consumption</li>
                            </ul>
                        </div>
                        <br />
                        <h3>Forces Rating Availible:</h3>
                        <div>
                            <ul>
                                <li>6.3 kip</li>
                                <li>11 kip</li>
                                <li>11 kip</li>
                                <li>55 kip</li>
                            </ul>
                            <ul>
                                <li>110 kip</li>
                                <li>Standard strokes of 4", 6", and 10" custom force and strokes available upon request</li>
                            </ul>
                        </div>
                    </div>       
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Servo_Dynamics/HydrostaticBearingActuators/HydrostaticBearingActuator1.jpg",
                        media: <img src="/images/Servo_Dynamics/HydrostaticBearingActuators/HydrostaticBearingActuator1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/HydrostaticBearingActuators/HydrostaticBearingActuator2.jpg",
                        media: <img src="/images/Servo_Dynamics/HydrostaticBearingActuators/HydrostaticBearingActuator2.jpg"/>,
                    },
                ]               
            },
            lcaLinearServoRatedActuator : {
                subSection: "Servo Dynamics",
                title : "LCA Linear Servo-Rated Actuator",
                body :
                <div>
                    <p>LINK offers a line of servo-rated actuators designed for smooth operation and a seamless fit into static or low-frequency testing applications. These actuators incorporate specific features typically provided by fatigue rated actuators such as LINK's LPA line. This line of actuators provides the precision control you have come to expect from LINK, but is a more economical option than fatigue rated LPA actuators.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Static or low frequency testing</li>
                    </ul>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Economical option</li>
                        <li>Precise closed loop control</li>
                        <li>Custom mounting options</li>
                    </ul>        
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Servo_Dynamics/LCALinearServo-RatedActuator/LCAServo-RatedActuator1.jpg",
                        media: <img src="/images/Servo_Dynamics/LCALinearServo-RatedActuator/LCAServo-RatedActuator1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/LCALinearServo-RatedActuator/LCAServo-RatedActuator2.jpg",
                        media: <img src="/images/Servo_Dynamics/LCALinearServo-RatedActuator/LCAServo-RatedActuator2.jpg"/>,
                    },
                ]               
            },
            lhaFatigueRatedHydrostaticBearingActuator : {
                subSection: "Servo Dynamics",
                title : "LHA Fatigue Rated Hydrostatic Bearing Actuator",
                body :
                <div>
                    <p>The LHA series actuator is intended for very demanding testing applications where the actuator is subjected to:</p>
                    <ul>
                        <li>High side loads</li>
                        <li>Frequencies above 100Hz</li>
                        <li>Applications requiring very low actuator friction</li>
                    </ul>
                    
                    <br />
                    <p>The intent of the test system determines the actuator requirements and LINK engineers will help you determine the optimal solution for your application. The typical actuator often includes these accessories:</p>

                    <div className="list-table">
                        <div>
                            <ul>
                                <li>Pedestal mounts</li>
                                <li>Close coupled accumulators</li>
                                <li>Delta-P transducers</li>
                                <li>Swivel or Ball Joints to allow lateral loads or motion</li>  
                            </ul>
                            <ul>
                                <li>Load cells</li>
                                <li>Servo valves</li>
                                <li>Additional connection accessories</li>
                            </ul>
                        </div>
                        <br />   
                        <h3>Key Benefits:</h3>
                        <div>
                            <ul>
                                <li>Low friction for accurate control</li>
                                <li>Concentric AC-AC LVDT which is compatible with testing industry control systems</li>
                                <li>Tungsten rod coating for greatly improved reliability</li>
                                <li>One piece, double-ended piston rod for improved control and reliability</li>
                                <li>Cushions to protect against end of stroke impact</li>
                            </ul>
                            <ul>
                                <li>Standard manifolds include cross-port bleed valve and pad for Delta-P transducer</li>
                                <li>Calibration sheets on all transducers</li>
                                <li>Maximum operating pressure 4000 PSI, 280 bar</li>
                                <li>Sharp edge orifice design offers improved control over capillary concept</li>
                            </ul>
                        </div>
                    </div>        
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Servo_Dynamics/LHAFatigueRatedHydrostaticBearingActuator/LHAFatigueActuator1.jpg",
                        media: <img src="/images/Servo_Dynamics/LHAFatigueRatedHydrostaticBearingActuator/LHAFatigueActuator1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/LHAFatigueRatedHydrostaticBearingActuator/LHAFatigueActuator2.jpg",
                        media: <img src="/images/Servo_Dynamics/LHAFatigueRatedHydrostaticBearingActuator/LHAFatigueActuator2.jpg"/>,
                    },
                ]               
            },
            lpaFatigueratedActuator : {
                subSection: "Servo Dynamics",
                title : "LPA Fatigue Rated Actuators",
                body :
                <div>
                    <p>The LPA Fatigue Rated Actuator is designed to fit your particular application. It is strong and durable, and typically includes the following accessories:</p>
                    <ul>
                        <li>Swivel or ball joints to allow lateral loads or motion</li>
                        <li>Load cells</li>
                        <li>Servo valves</li>
                        <li>Gimbal mounts</li>
                        <li>Additional connection accessories</li>
                    </ul>

                    <div className="list-table">
                        <br />
                        <h3>Application:</h3>
                        <div>
                            <ul>
                                <li>Almost static up to and exceeding 100HZ</li>
                            </ul>
                            <ul>
                                <li>Engineered to fit your application</li>
                            </ul>
                        </div>
                        <br />    
                        <h3>Key Benefits:</h3>
                        <div>
                            <ul>
                                <li>Low friction for accurate control</li>
                                <li>Concentric AC-AC LVDT which is compatible with testing industry control systems</li>
                                <li>Tungsten rod coating for greatly improved reliability</li>
                                <li>Cushions to protect against end of stroke impact</li>
                            </ul>
                            <ul>
                                <li>Special low friction, polymer rod bearing with improved wear characteristics</li>
                                <li>One piece, double-ended piston rod for improved control and reliability</li>
                            </ul>
                        </div>
                    </div>        
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Servo_Dynamics/LPAFatigueRatedActuators/LPAFatigueRatedActuator1.jpg",
                        media: <img src="/images/Servo_Dynamics/LPAFatigueRatedActuators/LPAFatigueRatedActuator1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/LPAFatigueRatedActuators/LPAFatigueRatedActuator2.jpg",
                        media: <img src="/images/Servo_Dynamics/LPAFatigueRatedActuators/LPAFatigueRatedActuator2.jpg"/>,
                    },
                ]               
            },
            sraSeriesSpinningRotatyActuators : {
                subSection: "Servo Dynamics",
                title : "SRA Series Spinning Rotary Actuators",
                body :
                <div>
                    <p>The SRA Series Spinning Rotary Actuator is used for applying torque in 4-square applications. It consists of a double vane type hydraulic rotary actuator and a rotary coupling to communicate hydraulic fluid to the actuator while it is spinning.<br /><br />A 4-square mechanically regenerates power through a mechanical system of shafts and gearboxes. This rotary actuator provides torque to load the system while the drive motor provides the rotational speed and is sized only to overcome the friction in the system, resulting in an energy efficient test stand.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Torque application in 4-square systems</li>
                    </ul>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Low friction interface with a theoretically infinite life</li>
                        <li>Can be used in high dynamic systems</li>
                        <li>Easy installation and removal</li>
                    </ul>        
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Servo_Dynamics/SRASeriesSpinningRotaryActuators/SRA1.jpg",
                        media: <img src="/images/Servo_Dynamics/SRASeriesSpinningRotaryActuators/SRA1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/SRASeriesSpinningRotaryActuators/SRA2.jpg",
                        media: <img src="/images/Servo_Dynamics/SRASeriesSpinningRotaryActuators/SRA2.jpg"/>,
                    },
                ]               
            },
            structuralLoadFrames : {
                subSection: "Servo Dynamics",
                title : "Structural Load Frames",
                body :
                <div>
                    <p>The Structural Load Frames, a two-column design load unit, is a rigid device used to perform tests on components. The adjustable crosshead allows for the insertion of environmental chambers, and gives a large working range for various specimen and fixtures.</p>
                    <br />
                    <h3>Applications:</h3>
                    <ul>
                        <li>Component testing</li>
                    </ul>
                    <br />
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>The frame has high stiffness and low mass resulting in high natural frequency allowing a wide test frequency range</li>
                        <li>A polymer coated plain or hydrostatic actuator is integrated in the base plate increasing the lateral stiffness</li>
                    </ul>
                    <br />
                    <h3>Specifications:</h3>
                    <ul>
                        <li>The crosshead is optionally mechanically or hydraulically locked and lifted. When hydraulic option is used, the crosshead is hydraulically unlocked, increasing the safety. Side mounted lift actuators adjust the crosshead working space</li>
                        <li>A low profile fatigue rated load cell provides high side load capability</li>
                        <li>The actuator servo valve manifold can be designed for single, dual, or three stage valves, using close coupled accumulators for increased performance</li>
                        <li>The frame is located on rubber isolation pads</li>
                    </ul>         
                </div>,
                items : [
                    {
                        backgroundImage: "/images/Servo_Dynamics/StructuralLoadFrames/StructuralLF1.jpg",
                        media: <img src="/images/Servo_Dynamics/StructuralLoadFrames/StructuralLF1.jpg"/>,
                    },
                    {
                        backgroundImage: "/images/Servo_Dynamics/StructuralLoadFrames/StructuralLF2.jpg",
                        media: <img src="/images/Servo_Dynamics/StructuralLoadFrames/StructuralLF2.jpg"/>,
                    },
                ]               
            },
        }
    ] 
}

export default ApplicationsMenu;
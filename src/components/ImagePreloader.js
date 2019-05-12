
console.log("Image Preloader")

const ImagePreloader = {

media : [
    /* Company Menu */
    'images/company/about/about-main-photo.jpg',
   'images/company/what-we-do/what-we-do.jpg',
   'images/company/customers/customers.jpg',
   'images/company/locations/locations-main-photo.jpg',
   'images/company/company.jpg',
   'images/company/TescorPhoto.jpg',

   // About Us
   '/images/company/about/75years.png',
   '/images/company/about/corp.png',
   '/images/company/about/final.png',
   '/images/company/about/final.png',

   // Locations
   "/images/company/locations/plymouth.jpg",
   "/images/company/locations/dearborn.jpg",
   "/images/company/locations/detroit.jpg",
   "/images/company/locations/arizona.jpg",
   "/images/company/locations/yucca.jpg",
   "/images/company/locations/ohio.jpg",
   "/images/company/locations/carson.jpg",
   "/images/company/locations/ottawa-lake.jpg",
   "/images/company/locations/europe.jpg",
   "/images/company/locations/italy.jpg",
   "/images/company/locations/japan.jpg",
   "/images/company/locations/south-america.jpg",
   "/images/company/locations/india-adams.jpg",
   "/images/company/locations/china.jpg",
   "/images/company/locations/huangshan.jpg",
   "/images/company/locations/korea.jpg",
   "/images/company/locations/TescorPhoto.jpg",

   // Tescor
   '/images/!TescorOverview/AutomotiveACSystemCalorimeter/ACSystemCalorimeter1.jpg',
   '/images/!TescorOverview/AutomotiveConditionedAirSupply/ConditionedAirSupply1.jpg',
   '/images/!TescorOverview/CodeTesterTunnels/CodeTesterTunnels1.jpg',
   '/images/!TescorOverview/CompressorCalorimeter/AutomotiveCompressorCalorimeter1.jpg',
   '/images/!TescorOverview/CompressorEnduranceTestStand/CompressorEnduranceTestStand1.jpg',
   '/images/!TescorOverview/HVACBalancedAmbientCalorimeter/BalancedAmbientCalorimeter1.jpg',
   '/images/!TescorOverview/HVACCompressorLifeCycleTestBench/CompressorLifeCycleTestBench1.jpg',
   '/images/!TescorOverview/HVACSurfaceCalorimeter/HVACSurfaceCalorimeter1.jpg',
   '/images/!TescorOverview/HVACTrailerMountedConditioningChamber/TrailerMountedConditioningChamber1.jpg',
   '/images/!TescorOverview/LowAirFlowTestBench/AutomotiveLowAirFlowTestBench.jpg',
   '/images/!TescorOverview/PharmaceuticalControlledRooms/PharmaceuticalControlledRooms1.jpg',
   '/images/!TescorOverview/PharmaceuticalFreezers/PharmaceuticalFreezers1.jpg',
   '/images/!TescorOverview/PharmaceuticalStandardWalk-InRooms/StandardWalk-InRooms1.jpg',
   '/images/!TescorOverview/PharmaceuticalTemperatureandHumidityControlRooms/TemperatureandHumidityControlRoom1.jpg',
   '/images/!TescorOverview/PhychrometricTestRooms/HVACPsychrometricTestRoom1.jpg',

   // Thumbnails
   '/images/!TescorOverview/AutomotiveACSystemCalorimeter/ACSystemCalorimeter1.jpg',
   "/images/!TescorOverview/AutomotiveACSystemCalorimeter/ACSystemCalorimeter2.jpg",
   "/images/!TescorOverview/AutomotiveACSystemCalorimeter/ACSystemCalorimeter3.jpg",
   '/images/!TescorOverview/AutomotiveConditionedAirSupply/ConditionedAirSupply1.jpg',
   "/images/!TescorOverview/AutomotiveConditionedAirSupply/ConditionedAirSupply2.jpg",
   "/images/!TescorOverview/AutomotiveConditionedAirSupply/ConditionedAirSupply3.jpg",
   '/images/!TescorOverview/CodeTesterTunnels/CodeTesterTunnels1.jpg',
   "/images/!TescorOverview/CodeTesterTunnels/CodeTesterTunnels2.jpg",
   "/images/!TescorOverview/CodeTesterTunnels/CodeTesterTunnels3.jpg",
   '/images/!TescorOverview/CompressorCalorimeter/AutomotiveCompressorCalorimeter1.jpg',
   "/images/!TescorOverview/CompressorCalorimeter/CompressorCalorimeter3.jpg",
   "/images/!TescorOverview/CompressorCalorimeter/HVACCompressorCalorimeter2.jpg",
   '/images/!TescorOverview/CompressorEnduranceTestStand/CompressorEnduranceTestStand1.jpg',
   "/images/!TescorOverview/CompressorEnduranceTestStand/CompressorEnduranceTestStand2.jpg",
   '/images/!TescorOverview/HVACBalancedAmbientCalorimeter/BalancedAmbientCalorimeter1.jpg',
   "/images/!TescorOverview/HVACBalancedAmbientCalorimeter/BalancedAmbientCalorimeter2.jpg",
   "/images/!TescorOverview/HVACBalancedAmbientCalorimeter/BalancedAmbientCalorimeter3.jpg",
   '/images/!TescorOverview/HVACCompressorLifeCycleTestBench/CompressorLifeCycleTestBench1.jpg',
   '/images/!TescorOverview/HVACSurfaceCalorimeter/HVACSurfaceCalorimeter1.jpg',
   "/images/!TescorOverview/HVACSurfaceCalorimeter/HVACSurfaceCalorimeter2.jpg",
   '/images/!TescorOverview/HVACTrailerMountedConditioningChamber/TrailerMountedConditioningChamber1.jpg',
   '/images/!TescorOverview/LowAirFlowTestBench/AutomotiveLowAirFlowTestBench.jpg',
   '/images/!TescorOverview/PharmaceuticalControlledRooms/PharmaceuticalControlledRooms1.jpg',
   '/images/!TescorOverview/PharmaceuticalFreezers/PharmaceuticalFreezers1.jpg',
   '/images/!TescorOverview/PharmaceuticalStandardWalk-InRooms/StandardWalk-InRooms1.jpg',
   '/images/!TescorOverview/PharmaceuticalTemperatureandHumidityControlRooms/TemperatureandHumidityControlRoom1.jpg',
   '/images/!TescorOverview/PhychrometricTestRooms/HVACPsychrometricTestRoom1.jpg',

   /***** Applications Menu *****/
   '/images/applcationMenu/SliderThumbs/CustSol_SliderThumb.jpg',
   '/images/applcationMenu/SliderThumbs/Control_SliderThumb.jpg',
   '/images/applcationMenu/SliderThumbs/BrakeIcon_SliderThumb.jpg',
   '/images/applcationMenu/SliderThumbs/WheelEnd_SliderThumb.jpg',
   '/images/applcationMenu/SliderThumbs/TransIcon_SliderThumb.jpg',
   '/images/applcationMenu/SliderThumbs/Spring_SliderThumb.jpg',
   '/images/applcationMenu/SliderThumbs/ServoHyd_SliderThumb.jpg',

   // *** Custom Solutions ***
   '/images/Custom_Solutions/Bi-AxalVibration/Bi-Axial.jpg',

   '/images/Custom_Solutions/ExhaustCorrosionFatigue/ExhaustCorrosionFatigueTester1.jpg',
   "/images/Custom_Solutions/ExhaustCorrosionFatigue/ExhaustCorrosionFatigueTester2.jpg",

   "/images/Custom_Solutions/SeatVibrationTester/SeatVibrationTester1.jpg",
   "/images/Custom_Solutions/SeatVibrationTester/SeatVibrationTester2.jpg",

   "/images/Custom_Solutions/SteeringAssemblyTestStand/SATS1.jpg",
   "/images/Custom_Solutions/SteeringAssemblyTestStand/SATS2.jpg",

   "/images/Custom_Solutions/SteeringPumpTestSystem/SteeringPump1.jpg",
   "/images/Custom_Solutions/SteeringPumpTestSystem/SteeringPump2.jpg",

   "/images/Custom_Solutions/Exciter3D/Exciter3D1.jpg",
   "/images/Custom_Solutions/Exciter3D/Exciter3D2.jpg",

   "/images/Custom_Solutions/BallJointBootTestMachine/BallJointBootTestMachine1.jpg",
   "/images/Custom_Solutions/BallJointBootTestMachine/BallJointBootTestMachine2.jpg",

   "/images/Custom_Solutions/BlosterSpringQC/BolsterSpringTestSystem1.jpg",
   "/images/Custom_Solutions/BlosterSpringQC/BolsterSpringTestSystem2.jpg",

   // Control and Aqusition
   '/images/Control_Acquisition/DynoView/DynoView1.jpg',
   "/images/Control_Acquisition/DynoView/DynoView2.jpg",

   '/images/Control_Acquisition/M-4275DataAcquisitionControl/M-4275.jpg',

   '/images/Control_Acquisition/LabLINK/LabLINK1.jpg',
   "/images/Control_Acquisition/LabLINK/LabLINK2.jpg",
   "/images/Control_Acquisition/LabLINK/LabLINK3.jpg",
   "/images/Control_Acquisition/LabLINK/LabLINK4.jpg",

   '/images/Control_Acquisition/LINKSquealReportApplication/LINKSquealReportApplication.jpg',
   
   '/images/Control_Acquisition/V-MAX4000/V-Max1.jpg',
   "/images/Control_Acquisition/V-MAX4000/V-Max2.jpg",
   "/images/Control_Acquisition/V-MAX4000/V-Max3.jpg",
   "/images/Control_Acquisition/V-MAX4000/V-Max4.jpg",

   '/images/Control_Acquisition/ProLINK/ProLINK1.jpg',
   "/images/Control_Acquisition/ProLINK/ProLINK2.jpg",
   "/images/Control_Acquisition/ProLINK/ProLINK3.jpg",

   '/images/Control_Acquisition/RegenSim/RegenSim.jpg',

   '/images/Control_Acquisition/RevdataPlus/RevData1.jpg',
   "/images/Control_Acquisition/RevdataPlus/RevData2.jpg",
   "/images/Control_Acquisition/RevdataPlus/RevData3.jpg",
   "/images/Control_Acquisition/RevdataPlus/RevData4.jpg",
   "/images/Control_Acquisition/RevdataPlus/RevData5.jpg",

   '/images/Control_Acquisition/ScriptEdit/ScriptEdit1.jpg',
   "/images/Control_Acquisition/ScriptEdit/ScriptEdit2.jpg",
   "/images/Control_Acquisition/ScriptEdit/ScriptEdit3.jpg",
   "/images/Control_Acquisition/ScriptEdit/ScriptEdit4.jpg",



   /****** Breaks Menu *******/
   '/images/flat_icons/DynoIcon_SliderThumb.jpg',
   '/images/flat_icons/TestStand_SliderThumb.jpg',
   '/images/flat_icons/SubSys_SliderThumb.jpg',

   // Dynamometer
   "/images/Brakes/Dynamometer/M-1200/M-1200ASD1.jpg",
   "/images/Brakes/Dynamometer/M-1200/M-1200ASD2.jpg",
   "/images/Brakes/Dynamometer/M-1200/M-1200ASD3.jpg",

   '/images/Brakes/Dynamometer/M-1400/M-1400Dyno1.jpg',
   "/images/Brakes/Dynamometer/M-1400/M-1400Dyno2.jpg",

   '/images/Brakes/Dynamometer/M-2000/M-2000Dyno1.jpg',
   "/images/Brakes/Dynamometer/M-2000/M-2000Dyno2.jpg",
   "/images/Brakes/Dynamometer/M-2000/M-2000Dyno3.jpg",

   '/images/Brakes/Dynamometer/M-2900/M-2900Dyno1.jpg',
   "/images/Brakes/Dynamometer/M-2900/M-2900Dyno2.jpg",

   '/images/Brakes/Dynamometer/M-3000/M-3000Dyno1.jpg',
   "/images/Brakes/Dynamometer/M-3000/M-3000Dyno2.jpg",
   "/images/Brakes/Dynamometer/M-3000/M-3000Dyno3.jpg",

   '/images/Brakes/Dynamometer/M-3640/M-3640Rail1.jpg',
   "/images/Brakes/Dynamometer/M-3640/M-3640Rail2.jpg",
   "/images/Brakes/Dynamometer/M-3640/M-3640Rail3.jpg",

   '/images/Brakes/Dynamometer/M-3900/M-3900Dyno1.jpg',
   "/images/Brakes/Dynamometer/M-3900/M-3900Dyno2.jpg",
   "/images/Brakes/Dynamometer/M-3900/M-3900Dyno3.jpg",

   '/images/Brakes/Dynamometer/M-3900SR/M-3900SR1.jpg',
   "/images/Brakes/Dynamometer/M-3900SR/M-3900SR2.jpg",
   "/images/Brakes/Dynamometer/M-3900SR/M-3900SR3.jpg",

   '/images/Brakes/Dynamometer/M-4900/M-4900Dyno1.jpg',
   "/images/Brakes/Dynamometer/M-4900/M-4900Dyno2.jpg",
   "/images/Brakes/Dynamometer/M-4900/M-4900Dyno3.jpg",
   "/images/Brakes/Dynamometer/M-4900/M-4900Dyno4.jpg",

   '/images/Brakes/Dynamometer/M-6900/M-6900Dyno1.jpg',
   "/images/Brakes/Dynamometer/M-6900/M-6900Dyno2.jpg",
   "/images/Brakes/Dynamometer/M-6900/M-6900Dyno3.jpg",

   '/images/Brakes/Dynamometer/M-8700/M-8700Dyno1.jpg',
   "/images/Brakes/Dynamometer/M-8700/M-8700Dyno2.jpg",
   "/images/Brakes/Dynamometer/M-8700/M-8700Dyno3.jpg",

   '/images/Brakes/Dynamometer/M-8900/M-8900Dyno1.jpg',
   "/images/Brakes/Dynamometer/M-8900/M-8900Dyno2.jpg",
   "/images/Brakes/Dynamometer/M-8900/M-8900Dyno3.jpg",

   // Test Stands
   "/images/Brakes/Test_Stands/Model200-600/M-200-600CFM1.jpg",
   "/images/Brakes/Test_Stands/Model200-600/M-200-600CFM2.jpg",
   "/images/Brakes/Test_Stands/Model200-600/M-200-600CFM3.jpg",

   "/images/Brakes/Test_Stands/Model1450/M-1450LPRW1.jpg",
   "/images/Brakes/Test_Stands/Model1450/M-1450LPRW2.jpg",

   "/images/Brakes/Test_Stands/Model1620/M-1620CM1.jpg",
   "/images/Brakes/Test_Stands/Model1620/M-1620CM2.jpg",

   "/images/Brakes/Test_Stands/Model1620H/M-1620-H1.jpg",
   "/images/Brakes/Test_Stands/Model1620H/M-1620-H2.jpg",
   "/images/Brakes/Test_Stands/Model1620H/M-1620-H3.jpg",

   "/images/Brakes/Test_Stands/Model2490/M-2490TFD1.jpg",
   "/images/Brakes/Test_Stands/Model2490/M-2490TFD2.jpg",
   "/images/Brakes/Test_Stands/Model2490/M-2490TFD3.jpg",

   "/images/Brakes/Test_Stands/Model2636/M-2636BFTS1.jpg",
   "/images/Brakes/Test_Stands/Model2636/M-2636BFTS2.jpg",
   "/images/Brakes/Test_Stands/Model2636/M-2636BFTS3.jpg",

   "/images/Brakes/Test_Stands/Model3664_REPLACEM-2876/M-3664SM1.jpg",
   "/images/Brakes/Test_Stands/Model3664_REPLACEM-2876/M-3664SM2.jpg",
   "/images/Brakes/Test_Stands/Model3664_REPLACEM-2876/M-3664SM3.jpg",

   "/images/Brakes/Test_Stands/Model3016/M-3016RDM1.jpg",
   "/images/Brakes/Test_Stands/Model3016/M-3016RDM2.jpg",
   "/images/Brakes/Test_Stands/Model3016/M-3016RDM3.jpg",

   "/images/Brakes/Test_Stands/Model3070/M-3070VDT1.jpg",
   "/images/Brakes/Test_Stands/Model3070/M-3070VDT2.jpg",
   "/images/Brakes/Test_Stands/Model3070/M-3070VDT3.jpg",

   "/images/Brakes/Test_Stands/Model3315/M-3315RMS1.jpg",
   "/images/Brakes/Test_Stands/Model3315/M-3315RMS2.jpg",

   "/images/Brakes/Test_Stands/Model3378/M-3378P1.jpg",
   "/images/Brakes/Test_Stands/Model3378/M-3378P2.jpg",
   "/images/Brakes/Test_Stands/Model3378/M-3378P3.jpg",

   "/images/Brakes/Test_Stands/Model3394/M-3394NVH1.jpg",
   "/images/Brakes/Test_Stands/Model3394/M-3394NVH2.jpg",
   "/images/Brakes/Test_Stands/Model3394/M-3394NVH3.jpg",
   "/images/Brakes/Test_Stands/Model3394/M-3394NVH4.jpg",

   "/images/Brakes/Test_Stands/Shapix1500/Shapix15001.jpg",
   "/images/Brakes/Test_Stands/Shapix1500/Shapix15002.jpg",
   "/images/Brakes/Test_Stands/Shapix1500/Shapix15003.jpg",

   "/images/Brakes/Test_Stands/ABSExpertHeavy/ABSExpert1.jpg",
   "/images/Brakes/Test_Stands/ABSExpertHeavy/ABSExpert2.jpg",

   "/images/Brakes/Test_Stands/AirSystemExpert/AirSystemExpert1.jpg",
   "/images/Brakes/Test_Stands/AirSystemExpert/AirSystemExpert2.jpg",

   "/images/Brakes/Test_Stands/BrakeShim/BrakeShim1.jpg",
   "/images/Brakes/Test_Stands/BrakeShim/BrakeShim2.jpg",
   "/images/Brakes/Test_Stands/BrakeShim/BrakeShim3.jpg",

   "/images/Brakes/Test_Stands/BM14200/BM14200RBT1.jpg",
   "/images/Brakes/Test_Stands/BM14200/BM14200RBT2.jpg",
   "/images/Brakes/Test_Stands/BM14200/BM14200RBT3.jpg",

   "/images/Brakes/Test_Stands/Model20200/M-20200RBT1.jpg",
   "/images/Brakes/Test_Stands/Model20200/M-20200RBT2.jpg",
   "/images/Brakes/Test_Stands/Model20200/M-20200RBT3.jpg",

   "/images/Brakes/Test_Stands/BM3010/BM3010.jpg",

   "/images/Brakes/Test_Stands/Model-100/Model100FM1.jpg",
   "/images/Brakes/Test_Stands/Model-100/Model100FM2.jpg",
   "/images/Brakes/Test_Stands/Model-100/Model100FM3.jpg",

   "/images/Brakes/Test_Stands/RWS100B/RWS100B1.jpg",
   "/images/Brakes/Test_Stands/RWS100B/RWS100B2.jpg",
   "/images/Brakes/Test_Stands/RWS100B/RWS100B3.jpg",
   "/images/Brakes/Test_Stands/RWS100B/RWS100B4.jpg",

   "/images/Brakes/Test_Stands/Model2552/M-2552BTS1.jpg",
   "/images/Brakes/Test_Stands/Model2552/M-2552BTS2.jpg",

   // Sub Systems
   "/images/Brakes/Sub_Systems/Model3945RoadLoadSimulation/M-3945RLS1.jpg",
   "/images/Brakes/Sub_Systems/Model3945RoadLoadSimulation/M-3945RLS2.jpg",
   "/images/Brakes/Sub_Systems/Model3945RoadLoadSimulation/M-3945RLS3.jpg",

   "/images/Brakes/Sub_Systems/Model2864PassiveRoadWheel/M-2864PRW1.jpg",
   "/images/Brakes/Sub_Systems/Model2864PassiveRoadWheel/M-2864PRW2.jpg",

   "/images/Brakes/Sub_Systems/Model5002ResidualDragTailstock/M-5002RDT1.jpg",
   "/images/Brakes/Sub_Systems/Model5002ResidualDragTailstock/M-5002RDT2.jpg",
   "/images/Brakes/Sub_Systems/Model5002ResidualDragTailstock/M-5002RDT3.jpg",

   /******* End of Breaks ******/


   // Wheel End
   '/images/Wheel_End/Force_MotionTireTestingSystem/Force_Motion1.jpg',
   "/images/Wheel_End/Force_MotionTireTestingSystem/Force_Motion2.jpg",
   "/images/Wheel_End/Force_MotionTireTestingSystem/Force_Motion3.jpg",
   "/images/Wheel_End/Force_MotionTireTestingSystem/Force_Motion4.jpg",
   "/images/Wheel_End/Force_MotionTireTestingSystem/Force_Motion5.jpg",

   '/images/Wheel_End/M-1750CorneringFatigue/M-1750CorneringFatigue.jpg',

   '/images/Wheel_End/M-2500RotaryFatigue/M-2500.jpg',

   '/images/Wheel_End/M-2938HUB_Bearing/M-2938HUB1.jpg',
   "/images/Wheel_End/M-2938HUB_Bearing/M-2938HUB2.jpg",

   '/images/Wheel_End/Model3526EccentricMass/M-3526EM1.jpg',
   "/images/Wheel_End/Model3526EccentricMass/M-3526EM2.jpg",
   "/images/Wheel_End/Model3526EccentricMass/M-3526EM3.jpg",

   "/images/Wheel_End/M-3546BearingTester/M-3546BearingTester1.jpg",
   "/images/Wheel_End/M-3546BearingTester/M-3546BearingTester2.jpg",
   "/images/Wheel_End/M-3546BearingTester/M-3546BearingTester3.jpg",

   "/images/Wheel_End/M-2500RotaryFatigue/M-2500.jpg",

   '/images/Wheel_End/Model3928BearingEnduranceTestMachine/M-3928BETM1.jpg',
   "/images/Wheel_End/Model3928BearingEnduranceTestMachine/M-3928BETM2.jpg",
   "/images/Wheel_End/Model3928BearingEnduranceTestMachine/M-3928BETM3.jpg",

   "/images/Wheel_End/Model1230WheelImpactTester/HammerheadStand1.jpg",
   "/images/Wheel_End/Model1230WheelImpactTester/HammerheadStand2.jpg",
   "/images/Wheel_End/Model1230WheelImpactTester/HammerheadStand3.jpg",
   
   '/images/Wheel_End/Model3830RadialFatigueLoadMachine/M-3830RadialLoadMachine1.jpg',

   '/images/Wheel_End/Model3536BiaxialWheelTester/Bi-Axial1.jpg',
   "/images/Wheel_End/Model3536BiaxialWheelTester/Bi-Axial2.jpg",
   "/images/Wheel_End/Model3536BiaxialWheelTester/Bi-Axial3.jpg",
   "/images/Wheel_End/Model3536BiaxialWheelTester/Bi-Axial4.jpg",

   // Transmission and Driveline
   '/images/Transmission_Driveline/AxleTestRig/AxleTestRig1.jpg',
   "/images/Transmission_Driveline/AxleTestRig/AxleTestRig2.jpg",

   '/images/Transmission_Driveline/BallJointBootTestSystems/BallJointBootTestMachine1.jpg',
   "/images/Transmission_Driveline/BallJointBootTestSystems/BallJointBootTestMachine2.jpg",

   '/images/Transmission_Driveline/M-1158TO-4Machine/M-1158Machine.jpg',

   '/images/Transmission_Driveline/M-2190AutoTransHighSpeed/M-2190ATHS1.jpg',
   "/images/Transmission_Driveline/M-2190AutoTransHighSpeed/M-2190ATHS2.jpg",

   '/images/Transmission_Driveline/M-2909ManualClutch/M-2909ClutchDurability1.jpg',
   "/images/Transmission_Driveline/M-2909ManualClutch/M-2909ClutchDurability2.jpg",
   
   '/images/Transmission_Driveline/M-1850SixSquareTestStand/M-1850SSTS1.jpg',
   "/images/Transmission_Driveline/M-1850SixSquareTestStand/M-1850SSTS2.jpg",
   "/images/Transmission_Driveline/M-1850SixSquareTestStand/M-1850SSTS3.jpg",
   "/images/Transmission_Driveline/M-1850SixSquareTestStand/M-1850SSTS4.jpg",

   '/images/Transmission_Driveline/AxleImpactTester/AxleImpactTester1.jpg',
   "/images/Transmission_Driveline/AxleImpactTester/AxleImpactTester2.jpg",
   "/images/Transmission_Driveline/AxleImpactTester/AxleImpactTester3.jpg",

   '/images/Transmission_Driveline/TwoSquareTimingChainTestSystem/TwoSquareTimingChainTestSystem1.jpg',
   "/images/Transmission_Driveline/TwoSquareTimingChainTestSystem/TwoSquareTimingChainTestSystem2.jpg",
   
   '/images/Transmission_Driveline/Model18004-SquareDrivelineTestSystem/M-1800.jpg',

   '/images/Transmission_Driveline/Model2090TransmissionTorqueCyclingDurabilityMachine/M-2090.jpg',
   
   '/images/Transmission_Driveline/Model3100SAENO2TestStand/M-3100SAENO2TestStand1.jpg',
   "/images/Transmission_Driveline/Model3100SAENO2TestStand/M-3100SAENO2TestStand2.jpg",
   "/images/Transmission_Driveline/Model3100SAENO2TestStand/M-3100SAENO2TestStand3.jpg",

   '/images/Transmission_Driveline/Model4298ElectricVehicleMotorDrivelineTestStand/M-4298.jpg',

   // Springs
   '/images/Springs/DigitalSULUnit/DigitalSULUnit1.jpg',
   "/images/Springs/DigitalSULUnit/DigitalSULUnit2.jpg",

   '/images/Springs/M-EL1SpringTester/M-EL1.jpg',

   '/images/Springs/M-0873SULMasterRingSet/M-0873.jpg',

   '/images/Springs/M-3700DisplayModule/M-3700.jpg',

   '/images/Springs/M-T4ASpringTester/M-T4A.jpg',

   '/images/Springs/ModelT4BSpringTester/M-T4B.jpg',

   '/images/Springs/ModelT4-XYSpringTester/M-T4-XY1.jpg',
   "/images/Springs/ModelT4-XYSpringTester/M-T4-XY2.jpg",

   // Servo Dynamics
   '/images/Servo_Dynamics/Actuators_Linear/LinearActuator1.jpg',
   "/images/Servo_Dynamics/Actuators_Linear/LinearActuator2.jpg",
   "/images/Servo_Dynamics/Actuators_Linear/LinearActuator3.jpg",
   "/images/Servo_Dynamics/Actuators_Linear/LinearActuator4.jpg",
   "/images/Servo_Dynamics/Actuators_Linear/LinearActuator5.jpg",
   "/images/Servo_Dynamics/Actuators_Linear/LinearActuator6.jpg",

   '/images/Servo_Dynamics/Actuators_Rotary/RotaryActuator1.jpg',
   "/images/Servo_Dynamics/Actuators_Rotary/RotaryActuator2.jpg",
   "/images/Servo_Dynamics/Actuators_Rotary/RotaryActuator3.jpg",

   '/images/Servo_Dynamics/BallJoints/BallJoint1.jpg',
   "/images/Servo_Dynamics/BallJoints/BallJoint2.jpg",

   '/images/Servo_Dynamics/CrossPortBleedPlates/CrossPortBleedPlates1.jpg',
   "/images/Servo_Dynamics/CrossPortBleedPlates/CrossPortBleedPlates2.jpg",

   '/images/Servo_Dynamics/3500TestController/3500TestController1.jpg',
   "/images/Servo_Dynamics/3500TestController/3500TestController2.jpg",
   "/images/Servo_Dynamics/3500TestController/3500TestController3.jpg",

   '/images/Servo_Dynamics/HydraulicControlManifolds/HydraulicControlManifold1.jpg',
   "/images/Servo_Dynamics/HydraulicControlManifolds/HydraulicControlManifold2.jpg",

   '/images/Servo_Dynamics/HydraulicPowerSupply/HydraulicPowerSupply1.jpg',
   "/images/Servo_Dynamics/HydraulicPowerSupply/HydraulicPowerSupply2.jpg",
   "/images/Servo_Dynamics/HydraulicPowerSupply/HydraulicPowerSupply3.jpg",

   '/images/Servo_Dynamics/LoadCalibrationStand/LoadCalibrationStand1.jpg',
   "/images/Servo_Dynamics/LoadCalibrationStand/LoadCalibrationStand2.jpg",
   "/images/Servo_Dynamics/LoadCalibrationStand/LoadCalibrationStand3.jpg",

   '/images/Servo_Dynamics/SpiralWashers/SpiralWashers1.jpg',
   "/images/Servo_Dynamics/SpiralWashers/SpiralWashers2.jpg",

   '/images/Servo_Dynamics/Swivels/Swivels1.jpg',
   "/images/Servo_Dynamics/Swivels/Swivels2.jpg",

   '/images/Servo_Dynamics/TableTopLoadFrame/TableTopLoadFrame.jpg',

   '/images/Servo_Dynamics/Delta-P/Delta-P.jpg',

   '/images/Servo_Dynamics/HighStrengthStuds/HighStrengthStuds.jpg',

   '/images/Servo_Dynamics/HydraulicPiping/HydraulicPiping1.jpg',
   "/images/Servo_Dynamics/HydraulicPiping/HydraulicPiping2.jpg",

   '/images/Servo_Dynamics/HydrostaticBearingActuators/HydrostaticBearingActuator1.jpg',
   "/images/Servo_Dynamics/HydrostaticBearingActuators/HydrostaticBearingActuator2.jpg",

   '/images/Servo_Dynamics/LCALinearServo-RatedActuator/LCAServo-RatedActuator1.jpg',
   "/images/Servo_Dynamics/LCALinearServo-RatedActuator/LCAServo-RatedActuator2.jpg",

   '/images/Servo_Dynamics/LHAFatigueRatedHydrostaticBearingActuator/LHAFatigueActuator1.jpg',
   "/images/Servo_Dynamics/LHAFatigueRatedHydrostaticBearingActuator/LHAFatigueActuator2.jpg",
   
   '/images/Servo_Dynamics/LPAFatigueRatedActuators/LPAFatigueRatedActuator1.jpg',
   "/images/Servo_Dynamics/LPAFatigueRatedActuators/LPAFatigueRatedActuator2.jpg",

   '/images/Servo_Dynamics/SRASeriesSpinningRotaryActuators/SRA1.jpg',
   "/images/Servo_Dynamics/SRASeriesSpinningRotaryActuators/SRA2.jpg",

   '/images/Servo_Dynamics/StructuralLoadFrames/StructuralLF1.jpg',
   "/images/Servo_Dynamics/StructuralLoadFrames/StructuralLF2.jpg",

   /***** Services Menu *****/
   '/images/services/testing_main_photo.jpg',
   '/images/services/proving_ground_main_photo.jpg',
   '/images/services/engineering_solutions_main_photo.jpg',
   '/images/services/asset_management_main_photo.jpg',

   // Testing
   '/images/services/testing/nvh/nvh-main-photo.jpg',
   '/images/services/testing/vehicle-dynamics/vehicle-dynamics-main-photo.jpg',
   '/images/services/testing/performance/performance-main-photo.jpg',
   '/images/services/testing/durability/durability-main-photo.jpg',
   '/images/services/testing/structural-fatigue/structural-fatigue-main-photo.jpg',
   '/images/services/testing/chemical/chemical-main-photo.jpg',
   '/images/services/testing/cerification-type-approval/cerification-type-approval-main-photo.jpg',
   '/images/services/testing/measurement/measurement-main-photo.jpg',
   '/images/services/testing/custom-testing/custom-testing-main-photo.jpg',

   // - NHV
   "/images/services/testing/nvh/photo-bank/maul-theet-shim-test-stand.jpg",
   "/images/services/testing/nvh/photo-bank/model-3900-nvh-dyno.jpg",
   "/images/services/testing/nvh/photo-bank/model-4900-chassis-dyno.jpg",

   // - Vehicle Dynamics
   "/images/services/testing/vehicle-dynamics/photo-bank/fmvss.jpg",
   "/images/services/testing/vehicle-dynamics/photo-bank/instrumented-motorcycle.jpg",
   "/images/services/testing/vehicle-dynamics/photo-bank/model-4000-v-max.jpg",

   // - Performance
   "/images/services/testing/performance/photo-bank/model-2636-caliper-test-stand.jpg",
   "/images/services/testing/performance/photo-bank/model-3000-performance-dyno.jpg",
   "/images/services/testing/performance/photo-bank/model-3945-road-load-simulator.jpg",

   // - Durability
   "/images/services/testing/durability/photo-bank/model-3546-bearing-test-machine.jpg",
   "/images/services/testing/durability/photo-bank/model-3928-bearing-endurance-machine.jpg",
   "/images/services/testing/durability/photo-bank/structural-load-frame.png",

   // - Structural Fatigue
   "/images/services/testing/structural-fatigue/photo-bank/Exciter3D1.jpg",
   "/images/services/testing/structural-fatigue/photo-bank/LinearActuator1.jpg",
   "/images/services/testing/structural-fatigue/photo-bank/HammerheadStand1.jpg",

   // - Chemical
   "/images/services/testing/chemical/photo-bank/friction-material-testing.jpg",
   "/images/services/testing/chemical/photo-bank/friction-material-testing-2.jpg",
   "/images/services/testing/chemical/photo-bank/friction-material-testing-3.jpg",

   // - Certification
   "/images/services/testing/cerification-type-approval/photo-bank/FMVSS110-tire-blow-out.jpg",
   "/images/services/testing/cerification-type-approval/photo-bank/FMVSS126-testing.jpg",
   "/images/services/testing/cerification-type-approval/photo-bank/FMVSS126-testing-2.jpg",

   // - Measurement
   "/images/services/testing/measurement/photo-bank/brake-testing.jpg",
   "/images/services/testing/measurement/photo-bank/execute-testing.jpg",
   "/images/services/testing/measurement/photo-bank/instrument-vehicles.jpg",

   // - Custom Testing
   "/images/services/testing/custom-testing/photo-bank/bi-axial-vibration-test-stand.jpg",
   "/images/services/testing/custom-testing/photo-bank/seat-vibration-tester.png",
   "/images/services/testing/custom-testing/photo-bank/table-top-load-frame.jpg",

   // Proving Grounds
   '/images/services/proving-ground/off-road/off-road-main-photo.jpg',
   '/images/services/proving-ground/on-road/on-road-main-photo.jpg',

   // - Off Road
   "/images/services/proving-ground/off-road/photo-bank/atv-testing.jpg",
   "/images/services/proving-ground/off-road/photo-bank/off-road.jpg",
   "/images/services/proving-ground/off-road/photo-bank/specialty-vehicle-testing.jpg",

   // - On Road
   "/images/services/proving-ground/on-road/photo-bank/vehicle-testing-1.jpg",
   "/images/services/proving-ground/on-road/photo-bank/vehicle-testing-2.jpg",
   "/images/services/proving-ground/on-road/photo-bank/vehicle-testing-3.jpg",

   // Engineering Solutions
   '/images/services/engineering-solutions/test-process-development/test-process-development-main-photo.jpg',
   '/images/services/engineering-solutions/v2d-correlation/v2d-correlation-main-photo.jpg',
   '/images/services/engineering-solutions/training/training-main-photo.jpg',
   '/images/services/engineering-solutions/certification-registrations/certification-registrations-main-photo.jpg',

   // - Test Proceedures
   "/images/services/engineering-solutions/test-process-development/photo-bank/prolink-execution.jpg",
   "/images/services/engineering-solutions/test-process-development/photo-bank/test-process.jpg",
   "/images/services/engineering-solutions/test-process-development/photo-bank/working-together-with-customers.jpg",

   // - V2D
   "/images/services/engineering-solutions/v2d-correlation/photo-bank/dynamometer-testing.jpg",
   "/images/services/engineering-solutions/v2d-correlation/photo-bank/vehicle-Instrumentation.jpg",
   "/images/services/engineering-solutions/v2d-correlation/photo-bank/vehicle-testing-on-track.jpg",

   // - Training
   "/images/services/engineering-solutions/training/photo-bank/calibration-service.jpg",
   "/images/services/engineering-solutions/training/photo-bank/inspection-and-preparation.jpg",
   "/images/services/engineering-solutions/training/photo-bank/preventative-maintenance.jpg",

   // - Certifications & Registrations
   "/images/services/engineering-solutions/certification-registrations/photo-bank/brake-testing-service.jpg",
   "/images/services/engineering-solutions/certification-registrations/photo-bank/chemical-testing.jpg",
   "/images/services/engineering-solutions/certification-registrations/photo-bank/machine-maintenance-and-calibration.jpg",


   // Assets Management
   '/images/services/asset-management/operations-at-link/operations-at-link-main-photo.jpg',
   '/images/services/asset-management/scalable-staffing/scalable-staffing-main-photo.jpg',

   // - Operations at Link
   "/images/services/asset-management/operations-at-link/photo-bank/dearborn-servo-hydraulics-lab.jpg",
   "/images/services/asset-management/operations-at-link/photo-bank/machine-maintenance.jpg",
   "/images/services/asset-management/operations-at-link/photo-bank/professional-test-facility.jpg",

   // - Scalable Staffing
   "/images/services/asset-management/scalable-staffing/photo-bank/calibration.jpg",
   "/images/services/asset-management/scalable-staffing/photo-bank/skilled-link-technicians.jpg",
   "/images/services/asset-management/scalable-staffing/photo-bank/skilled-personnel.jpg",               
]

};

const img = [];

// const image = ImagePreloader.media;

// image.map((item, index) => {
//     img[index] = new Image;
//     img[index].src = item;
//     img[index].onload = check;
// })

// //counter
// var counter = 0;

// //checking function
// function check(){
//     counter++;
//     if(image.length === counter) hideLoadingScreen();
//     document.getElementById("progressBar").value = counter;
// }


export default ImagePreloader;
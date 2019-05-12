import React from 'react';
import { Player, BigPlayButton } from 'video-react';

const CompanyMenu = {
    /* Top Menu */
    data : [
        {
            'label' : 'About Us',
            'backgroundImage' : 'images/company/about/about-main-photo.jpg',
            'pathname' : 'company/about-us',
        },
        {
            'label' : 'What We Do',
            'backgroundImage' : 'images/company/what-we-do/what-we-do.jpg',
            'pathname' : 'company/what-we-do'
        },
        {
            'label' : 'Customers',
            'backgroundImage' : 'images/company/customers/customers.jpg',
            'pathname' : 'company/customers'
        },
        {
            'label' : 'Locations',
            'backgroundImage' : 'images/company/locations/locations-main-photo.jpg',
            'pathname' : 'company/locations'
        },
        {
            'label' : 'Mission, Vision, Values',
            'backgroundImage' : 'images/company/company.jpg',
            'pathname' : 'company/mission'
        },
        {
            'label' : 'Tescor, a Link Group Company',
            'backgroundImage' : 'images/company/TescorPhoto.jpg',
            'pathname' : 'company/tescor'
        }
    ],
    /* Page Data */
    pageData : [
        {
            aboutUs : {
                subSection: "",
                backgroundImage : '../images/company/about/about-main-photo.jpg',
                title : <h2>About Us</h2>,
                body :
                <div>
                    <h4>Who We Are</h4>
                    <p>Link Engineering Company designs and manufactures precision test equipment, and provides comprehensive testing services for Transportation, Off-Highway, Industrial, and Civil Engineering. Headquartered in Plymouth, Michigan near Detroit, we maintain test laboratories and support facilities throughout the world.</p>
                    <br />
                    <h4><b>How We Make a Difference</b></h4>
                    <p>As an active participant or technical lead on several local and international industry working groups, we’ve helped establish many of the test specs and methodologies that have become universal standards. We are always pushing the envelope into emerging technologies, and consider it our responsibility to spearhead industry initiatives for the benefit of all. We are proud of our three-generation family-owned heritage, and strive to treat all of our customers and employees as family, too. Since many of our team members have been here for a decade or more, LINK offers a depth of experience, a collaborative approach, and a sense of purpose that few can match. We look forward to continuing that evolution, bringing smarter and more innovative testing solutions to the industry everywhere.</p>
                </div>,
                videos : [
                    {
                        id: "video",
                        buttonLabel: <span>75 Years</span>,
                        video : "../videos/link-75th-anniversary-video.mp4",
                        media :     
                        <Player
                            preload={"auto"}
                            playsInline
                            fluid={false}
                            autoPlay={true}
                            src="../videos/link-75th-anniversary-video.mp4">
                                <BigPlayButton position="center" />
                        </Player>,
                        backgroundImage : "/images/company/about/75years.png"
                    },
                    {
                        id: "video",
                        buttonLabel: <span>Corporate</span>,
                        video : "../videos/link-corporate-video.mp4",
                        media : 
                        <Player
                            preload={"auto"}
                            playsInline
                            fluid={false}
                            autoPlay={true}
                            src="../videos/link-corporate-video.mp4">
                                <BigPlayButton position="center" />
                        </Player>,
                        backgroundImage : "/images/company/about/corp.png"
                    },
                    {
                        id: "video",
                        buttonLabel: <span>Test Solutions</span>,
                        video : "../videos/link-final-1080p.mp4",
                        media : 
                        <Player
                            preload={"auto"}
                            playsInline
                            fluid={false}
                            autoPlay={true}
                            src="../videos/link-final-1080p.mp4">
                                <BigPlayButton position="center" />
                        </Player>,
                        backgroundImage : "/images/company/about/final.png"
                    },
                    {
                        id: "video-loop",
                        buttonLabel: <span>Play All</span>,
                        video : "../videos/link-75th-anniversary-video.mp4",
                        media : 
                        <video  
                            className="videoLoop"
                            autoplay="true"
                            playsInline
                            controls>
                        </video>,
                        backgroundImage : "/images/company/about/final.png"
                    },
                ] 
            },
            whatWeDo : {
                subSection: "",
                backgroundImage : '../images/company/what-we-do/what-we-do.jpg',
                title : <h2>What we do</h2>,
                body : 
              <div>
                    <p>Our specialty is developing innovative custom solutions for your most complex and demanding applications—especially in the arenas of force displacement and rotational torque. As the gold standard in testing for more than 80 years, LINK brings decades of hands-on experience and out-of-the-box thinking to OEMs and suppliers everywhere.</p>
                    <p>Where others either test your components, or make test equipment, LINK does both. So, you can test in our labs, buy your own system, or mix and match to fine-tune your solution. This unique flexibility delivers the most intelligent, cost-effective results.</p>
                    <p>We are also known worldwide for designing innovative control and data acquisition strategies for any type of measurement. Our groundbreaking ProLINK control system, which lets you analyze your data and create actionable custom reports through simple menu selections, is the most powerful, yet user-friendly control system anywhere.</p>              
              </div>,
               
            },
            customers : {
                subSection: "",
                backgroundImage: '../images/company/customers/customers.jpg',
                title : <h2>Customers</h2>,
                body :               
                    <div>
                        <p>90% of our business is from customers who keep coming back. We give you more flexible solutions to fit the most demanding testing applications. As a manufacturer and a testing lab, we do what you do, every day. After decades of experience, we’ve got a lot to share.</p>
                    </div>
            },
            locations : {
                subSection: "",
                backgroundImage: '../images/company/locations/locations-main-photo.jpg',
                title : <h2>Locations</h2>,
                body : <p>With over 80 years of leadership, and laboratories around the world, there is no testing problem we can’t solve more accurately, more efficiently, and more cost-effectively.</p>,
                
            },
            mission : {
                subSection: "",
                backgroundImage: '../images/company/company.jpg',
                title : <h2>Vision</h2>,
                body : 
                <div>
                    <p>To be the premier testing resource for the global transportation industry.</p>
                    <br />
                    <h2>Mission</h2>
                    <p>Maintain a global leadership position in the design, manufacture, and support of technologically advanced testing and automation equipment and testing services. Meet or exceed the customer expectations of quality, value, and 100% on-time delivery through continuous improvement practices and close partnerships with customers and suppliers. Provide a positive working environment for employees that encourages and rewards excellence and promotes continuous improvement.</p>
                    <br />
                    <h2 className="values-header">Values</h2>
                    <div className="mission-values-table list-table">
                        <div>
                            <ul>
                                <li>
                                    <h5><b>CUSTOMERS</b></h5>
                                    <p>We satisfy our customers. This is our first priority.</p>
                                </li>
                                <li>
                                    <h5><b>PEOPLE</b></h5>
                                    <p>We help our employees improve their skills, encourage new ideas, treat them fairly, recognize their achievements, and encourage employees to approach their jobs with enthusiasm and commitment.</p>
                                </li>
                                <li>
                                    <h5><b>TIMELINESS</b></h5>
                                    <p>We focus on simplifying processes and reducing cycle times to gain competitive advantage.</p>
                                </li>
                                <li>
                                    <h5><b>PERFORMANCE</b></h5>
                                    <p>We set high expectations, achieve challenging goals, and strive to meet commitments. Our aim is to be the best in our field in the world.</p>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <h5><b>INTEGRITY</b></h5>
                                    <p>We conduct business in an ethical manner and obey all laws, protect the environment, build safe products, and are socially responsible.</p>
                                </li>
                                <li>
                                    <h5><b>COOPERATION</b></h5>
                                    <p>We build trust and teamwork through cooperation with open communications across our organization. We share best practices and teamwork with our suppliers as well as our customers.</p>
                                </li>
                                <li>
                                    <h5><b>INNOVATION</b></h5>
                                    <p>We accept change and drive it by encouraging creativity and by striving for technical leadership.</p>
                                </li>
                                <li>
                                    <h5><b>QUALITY</b></h5>
                                    <p>We consider quality a priority. We adhere to a progressive quality policy to assure the integrity of our equipment and our testing services.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            },
            tescor : {
                backgroundImage: '../../images/company/TescorPhoto.jpg',
                className: 'tescor-page',
                title : <h2>Tescor</h2>,
                subTitle : <h4>A Link Group Company</h4>,
                body : 
                <div>
                    <p>Tescor’s strength and focus has been in the area of Calorimetry. Tescor is dedicated to the design and manufacture of climatic simulation and test equipment for the Automotive, HVAC and Pharmaceutical marketplace. With years of experience designing and building controlled-environment test systems, Tescor is equipped with proven expertise in refrigeration technology, psychrometric, data acquisition and control, computer technology and software, and many other disciplines. Tescor’s custom-engineered systems enable R&D or Quality Control Labs to test their products in conformance with the appropriate ASHRAE, ARI, AHAM, RAC, IEC, or JIS, and ISO standards.</p>
                </div>,
                subMenu : [
                    {
                        'label' : 'Automotive A/C System Calorimeter',
                        'backgroundImage' : '/images/!TescorOverview/AutomotiveACSystemCalorimeter/ACSystemCalorimeter1.jpg',
                        'pathname' : 'tescor/automotiveACSystemCalorimeter'            
                    },
                    {
                        'label' : 'Automotive Conditioned Air Supply',
                        'backgroundImage' : '/images/!TescorOverview/AutomotiveConditionedAirSupply/ConditionedAirSupply1.jpg',
                        'pathname' : 'tescor/automotiveConditionedAirSupply'            
                    },
                    {
                        'label' : 'Code Tester Tunnels',
                        'backgroundImage' : '/images/!TescorOverview/CodeTesterTunnels/CodeTesterTunnels1.jpg',
                        'pathname' : 'tescor/CodeTesterTunnels'            
                    },
                    {
                        'label' : 'Automotive & HVAC Compressor Calorimeters',
                        'backgroundImage' : '/images/!TescorOverview/CompressorCalorimeter/AutomotiveCompressorCalorimeter1.jpg',
                        'pathname' : 'tescor/CompressorCalorimeter'            
                    },
                    {
                        'label' : 'Compressor Endurance Test Stand',
                        'backgroundImage' : '/images/!TescorOverview/CompressorEnduranceTestStand/CompressorEnduranceTestStand1.jpg',
                        'pathname' : 'tescor/CompressorEnduranceTestStand'            
                    },
                    {
                        'label' : 'HVAC Balanced Ambient Calorimeter',
                        'backgroundImage' : '/images/!TescorOverview/HVACBalancedAmbientCalorimeter/BalancedAmbientCalorimeter1.jpg',
                        'pathname' : 'tescor/HVACBalancedAmbientCalorimeter'            
                    },
                    {
                        'label' : 'HVAC Compressor Life Cycle Test Bench',
                        'backgroundImage' : '/images/!TescorOverview/HVACCompressorLifeCycleTestBench/CompressorLifeCycleTestBench1.jpg',
                        'pathname' : 'tescor/HVACCompressorLifeCycleTestBench'            
                    },
                    {
                        'label' : 'HVAC Surface Calorimeter',
                        'backgroundImage' : '/images/!TescorOverview/HVACSurfaceCalorimeter/HVACSurfaceCalorimeter1.jpg',
                        'pathname' : 'tescor/HVACSurfaceCalorimeter'            
                    },
                    {
                        'label' : 'HVAC Trailer Mounted Conditioning Chamber',
                        'backgroundImage' : '/images/!TescorOverview/HVACTrailerMountedConditioningChamber/TrailerMountedConditioningChamber1.jpg',
                        'pathname' : 'tescor/HVACTrailerMountedConditioningChamber'            
                    },
                    {
                        'label' : 'Automotive Low Air Flow Test Bench',
                        'backgroundImage' : '/images/!TescorOverview/LowAirFlowTestBench/AutomotiveLowAirFlowTestBench.jpg',
                        'pathname' : 'tescor/LowAirFlowTestBench'            
                    },
                    {
                        'label' : 'Pharmaceutical Controlled Rooms',
                        'backgroundImage' : '/images/!TescorOverview/PharmaceuticalControlledRooms/PharmaceuticalControlledRooms1.jpg',
                        'pathname' : 'tescor/PharmaceuticalControlledRooms'            
                    },
                    {
                        'label' : 'Pharmaceutical Freezers',
                        'backgroundImage' : '/images/!TescorOverview/PharmaceuticalFreezers/PharmaceuticalFreezers1.jpg',
                        'pathname' : 'tescor/PharmaceuticalFreezers'            
                    },
                    {
                        'label' : 'Pharmaceutical Standard Walk-In Rooms',
                        'backgroundImage' : '/images/!TescorOverview/PharmaceuticalStandardWalk-InRooms/StandardWalk-InRooms1.jpg',
                        'pathname' : 'tescor/PharmaceuticalStandardWalkInRooms'            
                    },
                    {
                        'label' : <span className="two-line-wrap">Pharmaceutical Temperature <br />and Humidity Control Room</span>,
                        'backgroundImage' : '/images/!TescorOverview/PharmaceuticalTemperatureandHumidityControlRooms/TemperatureandHumidityControlRoom1.jpg',
                        'pathname' : 'tescor/PharmaceuticalTemperatureandHumidityControlRooms'         
                    },
                    {
                        'label' : 'HVAC Psychrometric Test Rooms',
                        'backgroundImage' : '/images/!TescorOverview/PhychrometricTestRooms/HVACPsychrometricTestRoom1.jpg',
                        'pathname' : 'tescor/PhychrometricTestRooms'            
                    },
                ],
                pageData : [
                    {
                        automotiveACSystemCalorimeter : {
                            subSection: "Tescor",
                            title : "Automotive A/C System Calorimeter",
                            body :
                            <div>
                                <p>Tescor’s A/C System Calorimeters are designed to provide the Test Engineer with extreme accuracy, repeatability and flexibility in the determination of automotive air conditioning system thermal capacities. We have designed system calorimeters for passenger car and bus air conditioning systems. </p>
                                <br />
                                <h2>Performance Measurement</h2>
                                <ul>
                                    <li>2% agreement or better refrigerant side to code tester air side</li>
                                    <li>1% repeatability of test results</li>
                                    <li>Compressor Calorimeter Tests</li>
                                    <li>Evaporator(s) Calorimeter Tests</li>
                                    <li>Condenser Calorimeter Tests</li>
                                    <li>Complete A/C System Calorimeter Tests</li>
                                    <li>Heater Core Tests</li>
                                    <li>D.C. Blowers Capacity Tests</li>
                                </ul>
                            </div>,
                            items : [
                                {
                                    backgroundImage: "/images/!TescorOverview/AutomotiveACSystemCalorimeter/ACSystemCalorimeter1.jpg",
                                    media: <img src="/images/!TescorOverview/AutomotiveACSystemCalorimeter/ACSystemCalorimeter1.jpg"/>,
                                },
                                {
                                    backgroundImage: "/images/!TescorOverview/AutomotiveACSystemCalorimeter/ACSystemCalorimeter2.jpg",
                                    media: <img src="/images/!TescorOverview/AutomotiveACSystemCalorimeter/ACSystemCalorimeter2.jpg"/>,
                                },
                                {
                                    backgroundImage: "/images/!TescorOverview/AutomotiveACSystemCalorimeter/ACSystemCalorimeter3.jpg",
                                    media: <img src="/images/!TescorOverview/AutomotiveACSystemCalorimeter/ACSystemCalorimeter3.jpg"/>,
                                }
                            ]
                        },
                        AutomotiveConditionedAirSupply : {
                            subSection: "Tescor",
                            title : "Automotive Conditioned Air Supply",
                            body :
                            <div>
                                <p>Tescor’s Conditioned Air Supply Systems are specially designed to provide air at precisely controlled temperature, humidity and pressure conditions for use in environmental testing. Our units are designed for maximum accuracy, repeatability and stability.</p>

                            </div>,
                            items : [
                                {
                                    backgroundImage: "/images/!TescorOverview/AutomotiveConditionedAirSupply/ConditionedAirSupply1.jpg",
                                    media: <img src="/images/!TescorOverview/AutomotiveConditionedAirSupply/ConditionedAirSupply1.jpg"/>,
                                },
                                {
                                    backgroundImage: "/images/!TescorOverview/AutomotiveConditionedAirSupply/ConditionedAirSupply2.jpg",
                                    media: <img src="/images/!TescorOverview/AutomotiveConditionedAirSupply/ConditionedAirSupply2.jpg"/>,
                                },
                                {
                                    backgroundImage: "/images/!TescorOverview/AutomotiveConditionedAirSupply/ConditionedAirSupply3.jpg",
                                    media: <img src="/images/!TescorOverview/AutomotiveConditionedAirSupply/ConditionedAirSupply3.jpg"/>,
                                }
                            ]
                        },
                        CodeTesterTunnels : {
                            subSection: "Tescor",
                            title : "Code Tester Tunnels",
                            body :
                            <div>
                                <p>Tescor manufactures a wide range of Air Flow Test Benches (Code Tester Tunnels) for use in determining fan performance as well as for determining air side enthalpy measurements for testing of heat exchangers. Our Air Flow Test Benches are custom built to meet the customer’s requirements and can be provided with manual controls or fully automatic data acquisition and control systems.</p>
                                <br />
                                <h2>Typical Specifications</h2>
                                <ul>
                                    <li>Air Flow Test Bench Features</li>
                                    <li>Air Flow Tunnel formed from clear Lexan© or urethane insulated panels</li>
                                    <li>Shear-type centrifugal mixers to thoroughly mix the Unit Under Test (UUT) discharge air</li>
                                    <li>Venturi-type nozzle to correct air flow uniformity</li>
                                    <li>Air flow sampling system to obtain accurate dry bulb, wet bulb or dew point temperatures</li>
                                    <li>AMCA air flow nozzles with manual or automated dampers</li>
                                    <li>Variable Speed System Blower</li>
                                    <li>Can be user configured to be a draw through or push through system</li>
                                    <li>Accurate pressure transducers to measure UUT differential pressure, Barometric Pressure and nozzle differential pressure</li>
                                    <li>DC power supply to control fan voltage in Automotive Applications</li>
                                    <li>Fan speed, voltage and current transducers</li>
                                    <li>Bypass dampers for low flow operation</li>
                                </ul>
                            </div>,
                            items : [
                                {
                                    backgroundImage: "/images/!TescorOverview/CodeTesterTunnels/CodeTesterTunnels1.jpg",
                                    media: <img src="/images/!TescorOverview/CodeTesterTunnels/CodeTesterTunnels1.jpg"/>,
                                },
                                {
                                    backgroundImage: "/images/!TescorOverview/CodeTesterTunnels/CodeTesterTunnels2.jpg",
                                    media: <img src="/images/!TescorOverview/CodeTesterTunnels/CodeTesterTunnels2.jpg"/>,
                                },
                                {
                                    backgroundImage: "/images/!TescorOverview/CodeTesterTunnels/CodeTesterTunnels3.jpg",
                                    media: <img src="/images/!TescorOverview/CodeTesterTunnels/CodeTesterTunnels3.jpg"/>,
                                }
                            ]
                        }, 
                        CompressorCalorimeter : {
                            subSection: "Tescor",
                            title : "Automotive & HVAC Compressor Calorimeters",
                            body :
                            <div>
                                <p>Tescor’s automotive compressor calorimeter system provides the customer with control of such parameters as compressor speed, discharge pressure, liquid temperature or sub-cooling, suction temperature or superheat, and suction pressure. In addition, Tescor offers as an option an oil control loop that allows the user to precisely and accurately control and report the percentage of oil in circulation automatically, in real-time.</p>
                                <p>Tescor’s HVAC calorimeters are provided with a secondary refrigerant calorimeter vessel and Micro Motion® coriolis mass flow sensor to provide accurate and repeatable determination of compressor capacity. Tescor’s calorimeter system provides the customer with control of such parameters as discharge pressure, liquid temperature, suction temperature, suction pressure, compressor ambient chamber and compressor voltage</p>
                                <br />
                                <h2>Performance Measurement:</h2>
                                <ul>
                                    <li>2% agreement or better measured mass-flow to calculated mass-flow</li>
                                    <li>1% repeatability of test results</li>
                                </ul>
                            </div>,
                            items : [
                                {
                                    backgroundImage: "/images/!TescorOverview/CompressorCalorimeter/AutomotiveCompressorCalorimeter1.jpg",
                                    media: <img src="/images/!TescorOverview/CompressorCalorimeter/AutomotiveCompressorCalorimeter1.jpg"/>,
                                },
                                {
                                    backgroundImage: "/images/!TescorOverview/CompressorCalorimeter/CompressorCalorimeter3.jpg",
                                    media: <img src="/images/!TescorOverview/CompressorCalorimeter/CompressorCalorimeter3.jpg"/>,
                                },
                                {
                                    backgroundImage: "/images/!TescorOverview/CompressorCalorimeter/HVACCompressorCalorimeter2.jpg",
                                    media: <img src="/images/!TescorOverview/CompressorCalorimeter/HVACCompressorCalorimeter2.jpg"/>,
                                }
                            ]
                        }, 
                        CompressorEnduranceTestStand : {
                            subSection: "Tescor",
                            title : "Compressor Endurance Test Stand",
                            body :
                            <div>
                                <p>Tescor compressor endurance test benches are designed to provide the user with a capability to perform various compressor tests under extreme conditions. Based on the specific needs of the end user, the test stands can be configured to control parameters such as compressor speed, compressor ambient temperature, clutch cycling, evaporator heat load, discharge pressure, suction pressure, etc.</p>
                            </div>,
                            items : [
                                {
                                    backgroundImage: "/images/!TescorOverview/CompressorEnduranceTestStand/CompressorEnduranceTestStand1.jpg",
                                    media: <img src="/images/!TescorOverview/CompressorEnduranceTestStand/CompressorEnduranceTestStand1.jpg"/>,
                                },
                                {
                                    backgroundImage: "/images/!TescorOverview/CompressorEnduranceTestStand/CompressorEnduranceTestStand2.jpg",
                                    media: <img src="/images/!TescorOverview/CompressorEnduranceTestStand/CompressorEnduranceTestStand2.jpg"/>,
                                }
                            ]
                        },
                        HVACBalancedAmbientCalorimeter : {
                            subSection: "Tescor",
                            title : "HVAC Balanced Ambient Calorimeter",
                            body :
                            <div>
                                <p>Tescor’s Balanced Ambient Calorimeters are designed to be supplied as calibrated room type or full balanced ambient with a conditioned annular space around the test room. Room temperature and humidity conditions are precisely and accurately controlled. All power inputs to the inner rooms and the test unit are measured and balanced. The calorimeters are provided with a fully automatic, computerized data acquisition and control system.</p>
                                <br />
                                <h2>Available Options:</h2>
                                <ul>
                                    <li>Automated Pressure Equalizer</li>
                                    <li>Outdoor Room Controlled Annular Space</li>
                                    <li>Heating Capacity Test Capability without reversing UUT mounting</li>
                                    <li>Air-Flow Code Tester for Airflow Measurement</li>
                                </ul>
                            </div>,
                            items : [
                                {
                                    backgroundImage: "/images/!TescorOverview/HVACBalancedAmbientCalorimeter/BalancedAmbientCalorimeter1.jpg",
                                    media: <img src="/images/!TescorOverview/HVACBalancedAmbientCalorimeter/BalancedAmbientCalorimeter1.jpg"/>,
                                },
                                {
                                    backgroundImage: "/images/!TescorOverview/HVACBalancedAmbientCalorimeter/BalancedAmbientCalorimeter2.jpg",
                                    media: <img src="/images/!TescorOverview/HVACBalancedAmbientCalorimeter/BalancedAmbientCalorimeter2.jpg"/>,
                                },
                                {
                                    backgroundImage: "/images/!TescorOverview/HVACBalancedAmbientCalorimeter/BalancedAmbientCalorimeter3.jpg",
                                    media: <img src="/images/!TescorOverview/HVACBalancedAmbientCalorimeter/BalancedAmbientCalorimeter3.jpg"/>,
                                }
                            ]
                        },
                        HVACCompressorLifeCycleTestBench : {
                            subSection: "Tescor",
                            title : "HVAC Compressor Life Cycle Test Bench",
                            body :
                            <div>
                                <p>Tescor’s Life Cycle Test Benches and Compressor Slug Test Benches are custom built for hermetic, semi-hermetic, rotary or scroll compressor applications. These stands are designed for quick compressor changeout and reliability of operation. Based on the specific needs of the end user, the test stands can be configured to control parameters such as compressor speed, compressor ambient temperature, evaporator heat load, discharge pressure, suction pressure, etc. These systems can be provided with semi-automatic controls (PID control loops) with connections to dataloggers or with fully automated data acquisition and control systems.</p>
                            </div>,
                            items : [
                                {
                                    backgroundImage: "/images/!TescorOverview/HVACCompressorLifeCycleTestBench/CompressorLifeCycleTestBench1.jpg",
                                    media: <img src="/images/!TescorOverview/HVACCompressorLifeCycleTestBench/CompressorLifeCycleTestBench1.jpg"/>,
                                }
                            ]
                        },
                        HVACSurfaceCalorimeter : {
                            subSection: "Tescor",
                            title : "HVAC Surface Calorimeter",
                            body :
                            <div>
                                <p>Surface Calorimeters are used to determine the capacities of such components as: Radiators, Condensers, Evaporators, Heater Cores, Oil Coolers, Charge Air Coolers, Tube Surfaces, Chilled Water Coils, etc. The surface calorimeters utilize temperature-controlled chambers for the control of air temperature over the heat exchangers. Tescor uses Code Testers to determine system air-flows and the psychrometric conditions of the air as it exits the test piece. The calorimeter offers control over such parameters as ambient temperature and humidity, test piece air flow, compressor speed, discharge pressure, condenser inlet temperature, expansion device inlet temperature, suction temperature, heater core inlet temperature, pressures and flows, etc..</p>
                            </div>,
                            items : [
                                {
                                    backgroundImage: "/images/!TescorOverview/HVACSurfaceCalorimeter/HVACSurfaceCalorimeter1.jpg",
                                    media: <img src="/images/!TescorOverview/HVACSurfaceCalorimeter/HVACSurfaceCalorimeter1.jpg"/>,
                                },
                                {
                                    backgroundImage: "/images/!TescorOverview/HVACSurfaceCalorimeter/HVACSurfaceCalorimeter2.jpg",
                                    media: <img src="/images/!TescorOverview/HVACSurfaceCalorimeter/HVACSurfaceCalorimeter2.jpg"/>,
                                }
                            ]
                        },
                        HVACTrailerMountedConditioningChamber : {
                            subSection: "Tescor",
                            title : "HVAC Trailer Mounted Conditioning Chamber",
                            body :
                            <div>
                                <p>Tescor’s Trailer-Mounted Conditioning Chambers are specially designed to provide a Test Space at precisely controlled temperature conditions for use in Test Product Temperature conditioning at different locations. Our units are designed for maximum accuracy, reliability, stability and ease of transport. The Trailer-Mounted Conditioning Chamber system includes a mechanical service room housing all the support refrigeration and heating equipment and control panel. The TMCC is completely self-sufficient when connected to the local power source using the retractable power cable.</p>
                                <br />
                                <p>Trailer-Mounted Conditioning Chambers have been widely utilized in the following applications:
                                </p>
                                <ul>
                                    <li>Automotive Climate Control Component Development</li>
                                    <li>Ammunition Temperature Conditioning</li>
                                    <li>Missile Temperature Conditioning</li>
                                </ul>
                                <br />
                                <div className="list-table tescor-condition">
                                <div>
                                    <div className="tescor-table-row">
                                        <h3>Ambient Air</h3>
                                        <h5>Conditions:</h5>
                                    </div>
                                    <div className="tescor-table-row">
                                        <h3>Chamber Controlled</h3>
                                        <h5>Conditions:</h5>                             
                                    </div>
                                </div>
                                <div>
                                    <ul>
                                        <li>Dry Bulb Temperature</li>
                                        <li>-40°F to 120°F</li>
                                    </ul>
                                    <ul>
                                        <li>Dry Bulb Temperature</li>
                                        <li>-67°F to 170°F ± 2°F</li>
                                    </ul>
                                </div>
                            </div>
                            </div>,
                            items : [
                                {
                                    backgroundImage: "/images/!TescorOverview/HVACTrailerMountedConditioningChamber/TrailerMountedConditioningChamber1.jpg",
                                    media: <img src="/images/!TescorOverview/HVACTrailerMountedConditioningChamber/TrailerMountedConditioningChamber1.jpg"/>,
                                }
                            ]
                        },
                        LowAirFlowTestBench : {
                            subSection: "Tescor",
                            title : "Automotive Low Air Flow Test Bench",
                            body :
                            <div>
                                <p>Tescor manufactures a wide range of Air Flow Test Benches for use in determining fan performance as well as for determining air side enthalpy measurements for testing of heat exchangers. Our Air Flow Test Benches are custom built to meet the customer's requirements and can be provided with manual controls or fully automatic data acquisition and control systems.</p>
                            </div>,
                            items : [
                                {
                                    backgroundImage: "/images/!TescorOverview/LowAirFlowTestBench/AutomotiveLowAirFlowTestBench.jpg",
                                    media: <img src="/images/!TescorOverview/LowAirFlowTestBench/AutomotiveLowAirFlowTestBench.jpg"/>,
                                }
                            ]
                        },
                        PharmaceuticalControlledRooms : {
                            subSection: "Tescor",
                            title : <h2>Pharmaceutical Controlled Rooms</h2>,
                            body :
                            <div>
                                <p>Tescor manufactures custom environmental chambers for use in Industrial Testing and Life Science Applications. These chambers can range from walk-in type used for the storage of temperature sensitive pharmaceuticals, to large drive-in chambers used in testing automobiles.</p>
                            </div>,
                            items : [
                                {
                                    backgroundImage: "/images/!TescorOverview/PharmaceuticalControlledRooms/PharmaceuticalControlledRooms1.jpg",
                                    media: <img src="/images/!TescorOverview/PharmaceuticalControlledRooms/PharmaceuticalControlledRooms1.jpg"/>,
                                }
                            ]
                        },
                        PharmaceuticalFreezers : {
                            subSection: "Tescor",
                            title : "Pharmaceutical Freezers",
                            body :
                            <div>
                                <p>Tescor manufactures customized low temperature freezers that are used for bulk storage of pharmaceutical products. Tescor has utilized its experience in refrigeration and air conditioning technologies to manufacture chambers which can maintain –70° C (-94° F) on a continuous basis. The Tescor freezer is configured to have a -20° C corridor with identical -70° C freezer compartments on both sides. The freezer can also be configured to include a +4° C Ante-room to help prevent moisture migration to freezer section.</p>
                                <br />
                                <h2>Features of -70° C Freezers</h2>
                                <ul>
                                    <li>-20°C Corridor</li>
                                    <li>-70°C Side Freezer Compartments</li>
                                    <li>Dry Air Purge to maintain -70°C dewpoint or less</li>
                                    <li>Primary and Backup Control Systems</li>
                                    <li>Room and Equipment Safeties</li>
                                    <li>Man in the Box Alarm</li>
                                    <li>LN2 Emergency Backup System</li>
                                    <li>Double Wall Construction to eliminate condensation on exterior of Room</li>
                                    <li>A number of interior and exterior finishes are available for the freezer room</li>
                                    <li>3" diameter Validation Port for instrumentation on side of corridor</li>
                                    <li>Multi-circuited Fan Coil unit for Corridor Conditioning</li>
                                    <li>Redundant Gravity DX coils in Freezers</li>
                                    <li>Redundant Cascade Refrigeration Systems (Available in air-cooled or water-cooled)</li>
                                    <li>Turn-key installation by Tescor personnel</li>
                                </ul>
                            </div>,
                            items : [
                                {
                                    backgroundImage: "/images/!TescorOverview/PharmaceuticalFreezers/PharmaceuticalFreezers1.jpg",
                                    media: <img src="/images/!TescorOverview/PharmaceuticalFreezers/PharmaceuticalFreezers1.jpg"/>,
                                }
                            ]
                        },
                        PharmaceuticalStandardWalkInRooms : {
                            subSection: "Tescor",
                            title : "Pharmaceutical Standard Walk-In Rooms",
                            body :
                            <div>
                                <p>Tescor offers a line of standard walk-in environmentally controlled rooms at an attractive price that includes many features found on our custom Environmental Rooms. In addition to temperature control these standard rooms can be equipped with humidity control within certain ranges of temperature.</p>
                            </div>,
                            items : [
                                {
                                    backgroundImage: "/images/!TescorOverview/PharmaceuticalStandardWalk-InRooms/StandardWalk-InRooms1.jpg",
                                    media: <img src="/images/!TescorOverview/PharmaceuticalStandardWalk-InRooms/StandardWalk-InRooms1.jpg"/>,
                                }
                            ]
                        },
                        PharmaceuticalTemperatureandHumidityControlRooms : {
                            subSection: "Tescor",
                            title : "Pharmaceutical Temperature and Humidity Control Room",
                            body :
                            <div>
                                <p>Tescor manufactures custom environmental chambers for use in Industrial Testing and Life Science Applications. These chambers can range from walk-in type used for the storage of temperature sensitive pharmaceuticals, to large drive-in chambers used in testing automobiles. Tescor has utilized its experience in refrigeration and air conditioning technologies to manufacture chambers which can maintain –100°F on a continuous basis or chambers which can reach as high as 250°F. These systems can be supplied with temperature and humidity PID controls or with fully computerized data acquisition and control systems.</p>
                            </div>,
                            items : [
                                {
                                    backgroundImage: "/images/!TescorOverview/PharmaceuticalTemperatureandHumidityControlRooms/TemperatureandHumidityControlRoom1.jpg",
                                    media: <img src="/images/!TescorOverview/PharmaceuticalTemperatureandHumidityControlRooms/TemperatureandHumidityControlRoom1.jpg"/>,
                                }
                            ]
                        }, 
                        PhychrometricTestRooms : {
                            subSection: "Tescor",
                            title : "HVAC Psychrometric Test Rooms",
                            body :
                            <div>
                                <p>Psychrometric Rooms are used by air conditioner manufacturers to determine the thermal performance of unitary air conditioners and split systems. Tescor utilizes dual rooms (indoor and outdoor) and the air enthalpy method to determine unit capacities and provide heat balances. Tescor's Psychrometric Test Rooms are able to control such parameters as Indoor Room Dry Bulb Temperature, Indoor Room Dew Point, Outdoor Room Dry Bulb Temperature, Outdoor Room Dew Point Temperature, Indoor Room Unit Under Test (UUT) Airflow, Outdoor Room UUT Airflow and UUT Voltage.</p>
                            </div>,
                            items : [
                                {
                                    backgroundImage: "/images/!TescorOverview/PhychrometricTestRooms/HVACPsychrometricTestRoom1.jpg",
                                    media: <img src="/images/!TescorOverview/PhychrometricTestRooms/HVACPsychrometricTestRoom1.jpg"/>,
                                }
                            ]
                        },      
                    },
                ]
            }
        }
    ]
}

export default CompanyMenu;
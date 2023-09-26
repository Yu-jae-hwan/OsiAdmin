/*!

=========================================================
* Purity UI Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/purity-ui-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design by Creative Tim & Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import { 
	Flex, 
	Text, 
	useColorModeValue, 
	Stack,
	Select,
	FormControl,
	Icon,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	MenuDivider,
	Button
} from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import SearchTable2 from "components/Tables/SearchTable2";
import React, {useState} from "react";
import { columnsData1 } from "variables/columnsData";
import tableData1 from "variables/tableData1.json";
import ChartList from "./components/ChartList";
import { IoDocumentsSharp } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateIcon } from 'react-icons-kit';
import { calendar } from "react-icons-kit/icomoon";


/*	constructor(props){
		super(props);
		this.state = {
			startDate: new Date(),
			endDate:new Date(),
		}
	}
	
	handleChange = startDate =>{
		this.setState({
			startDate: startDate
		});
	}
	
	handleChangeEnd = endDate =>{
		this.setState({
			endDate: endDate
		});
	}*/


function DataTables() {
  const textColor = useColorModeValue("gray.700", "white");
  
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [displayOption, setDisplayOption] = useState(["True"]);
  
  return (
    <Flex direction="column" pt={{ sm: "125px", lg: "75px" }}>
      <Card px="0px">
        <CardHeader>
        	<Menu>
		        <MenuButton
		        onClick={() =>
		                  setDisplayOption("true")
		                }>
		          {/*<BellIcon color={navbarIcon} w="18px" h="18px" />*/}
		          <Icon
			            as={FaRegCalendarAlt}
			            color="gray.400"
			            fontSize="md"
			            me="6px"
			        ></Icon>
		        </MenuButton>
		        <Text color="gray.400" fontSize="sm" fontWeight="semibold">
		            기간 필터
		        </Text>
		        <MenuList p="16px 8px" display={displayOption}>
		          <Flex flexDirection="column" w="100%">
		          	<Text color="gray.400" fontSize="sm" fontWeight="semibold">
		            	Dates:
		        	</Text>
		              <Select
		                  fontSize="xs"
		                  color="gray.400"
		                  borderRadius="15px"
		                  w="100%"
		              >
		                  <option>Check-in or Check-out</option>
		                  <option>Check-in</option>
		                  <option>Check-out</option>
		                  <option>Creation</option>
		              </Select>
		            </Flex>
		            <Text color="gray.400" fontSize="sm" fontWeight="semibold">
		            기간 시작일
		        	</Text>
		            <Flex 
		            flexDirection="row"
		            align="center"
                	w={{ sm: "100%", lg: "135px" }}
		            >
		            <Icon
			            as={FaRegCalendarAlt}
			            color="gray.400"
			            fontSize="md"
			            me="6px"
			        ></Icon>
		            <DatePicker 
		            selected={startDate}
		            onChange={(date)=>setStartDate(date)}
		            selectsStart
		            inline={false}
		            />
		            </Flex>
		            <Text color="gray.400" fontSize="sm" fontWeight="semibold">
		            기간 종료일
		        	</Text>
		            <Flex 
		            flexDirection="row"
		            align="center"
                	w={{ sm: "100%", lg: "135px" }}
		            >
		            <Icon
			            as={FaRegCalendarAlt}
			            color="gray.400"
			            fontSize="md"
			            me="6px"
			        ></Icon>
		            <DatePicker
		            selected={endDate}
		            onChange={(date)=>setEndDate(date)}
		            selectsEnd
		            inline={false}
		            />
		          </Flex>
		            <MenuDivider />
		            <Button
                      variant="no-hover"
                      bg={useColorModeValue("white", "gray.700")}
                      onClick={() =>
		                  setDisplayOption("none")
		                }>
                      Cancel
                    </Button>
		        </MenuList>
		      </Menu>
        </CardHeader>
      	<CardBody>
      	<ChartList />
        </CardBody>
      </Card>
      <Card px="0px">
        <CardHeader>
         <Flex
	        direction="column"
	        w="100%"
	      >
	        <Stack
	          direction="row"
	          spacing="24px"
	          align="center"
	          my="5px"
	          px="22px"
	        >
                <Select
                  fontSize="xs"
                  color="gray.400"
                  borderRadius="15px"
                  maxW="130px"
                >
                  <option>객실팀</option>
                  <option>운영팀</option>
                </Select>
	          <Text fontSize="xs" color={textColor} fontWeight="bold">
	            상태 필터값
	          </Text>
	        </Stack>
	      </Flex>   
	      <Flex
                align="center"
                w={{ sm: "100%", lg: "135px" }}
                bg={null}
                borderColor={"black"}
                borderRadius="15px"
                justifyContent="center"
                py="10px"
                mx={{ lg: "1rem" }}
                cursor="pointer"
                onClick={() =>
                  console.log("클릭")
                }
           >
	       <Stack
	          direction="row"
	          spacing="24px"
	          align="center"
	          my="5px"
	          px="22px"
	        >
	          <Icon as={IoDocumentsSharp} me="6px" />
                <Text fontSize="xs" color={textColor} fontWeight="bold">
                  COLUMNS
                </Text>
	        </Stack>  
	      </Flex>
        </CardHeader>
        </Card>
        <Card>
        <CardBody>
          {/*<BasicTable tableData={tableData1} columnsData={columnsData1} />*/}
          <SearchTable2 tableData={tableData1} columnsData={columnsData1} />
        </CardBody>
      </Card>
    </Flex>
  );
}

export default DataTables;

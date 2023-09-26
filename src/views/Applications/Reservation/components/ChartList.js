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
	Progress, 
	Stack,
	Box
} from "@chakra-ui/react";
import React, {useState, useEffect} from "react";
import axios from "axios"; 



const ChartList = () => {
	const textColor = useColorModeValue("gray.700", "white");
	
	const [tempData, setData] = useState([]);
	useEffect(() => {
	 axios.get(
		"http://localhost:8080/api/reservation"
            )
    .then((result) => {
    	 setData(result.data);
     });
	}, []); //dept 삭제
	
	for(const data of tempData){
		console.log("이거니"+data.date);
	}
     
     return (
		 <Stack direction={["column","row"]} spacing="15px" w="100%" mb="0px">
      	 	 {tempData.map((charData) => (
                    <Box w="160px" bg={charData.color}>
		          <Text fontSize="lg" color={textColor} fontWeight="bold">
		            {charData.date}
		          </Text>
		          <Flex direction="column">
		              <Flex justify="space-between" mb="8px">
		                <Text fontSize="md" color="gray.400" fontWeight="500">
		                  Check-In
		                </Text>
		                <Text fontSize="md" color="gray.400" fontWeight="500">
		                  {charData.totalChkInCnt}
		                </Text>
		              </Flex>
		              <Progress
		                colorScheme="teal"
		                size="sm"
		                value={(charData.chkInCnt/charData.totalChkInCnt)*100}
		                borderRadius="15px"
		              ></Progress>
		              <Flex justify="space-between" mb="8px">
		                <Text fontSize="md" color="gray.400" fontWeight="500">
		                  Check-Out
		                </Text>
		                <Text fontSize="md" color="gray.400" fontWeight="500">
		                  {charData.totalChkOutCnt}
		                </Text>
		              </Flex>
		              <Progress
		                colorScheme="teal"
		                size="sm"
		                value={(charData.chkOutCnt/charData.totalChkOutCnt)*100}
		                borderRadius="15px"
		              ></Progress>
		              <Flex justify="space-between" mb="8px">
		                <Text fontSize="md" color="gray.400" fontWeight="500">
		                  Statying
		                </Text>
		                <Text fontSize="md" color="gray.400" fontWeight="500">
		                  {charData.totalStaying}
		                </Text>
		              </Flex>
		              <Progress
		                colorScheme="teal"
		                size="sm"
		                value={(charData.stayingCnt/charData.totalStaying)*100}
		                borderRadius="15px"
		              ></Progress>
		          </Flex>
			  </Box>
                ))}
           </Stack>
	 );
};

export default ChartList;
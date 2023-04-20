// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.17;

error Candidate_Already_Exist();
error CandidateNotExistForVP();
error CandidateNotExistForPresident();
contract Evoting{
	
	struct Candiate_details{
		uint256 idNo;
		uint256 CountVote;
		uint256 CandidateAge;   
		uint256 CandidateDesignation;
        address addr;
		string CandidateName;                       
		string CandidateEducation;
        string imgURL;
	}

	struct Voter{
        uint256 age;
		bool HasVotedForVicePresident;
		bool HasVotedForPresident;
		bool IsRegistered;
	}

    enum State{START,REGESTRATION,VOTING,RESULT}      

    mapping(address => bool) public blacklist;
	mapping(uint256 => Candiate_details) public Candidate; 
    mapping(address => Voter) public voters;
	uint256 public count;
	uint256 public changeSate;
	address public immutable admin; 
    State public state; 
    uint256 private winnerPresident;
    uint256 private winnerVicePresident;

	modifier onlyAdmin(){
		require(msg.sender==admin,"Only Admin can set");
		_;
	}
	
	modifier validState(State _state){
	    require(state==_state,"State not matched");
	    _;
	}

	constructor() {
		admin = msg.sender;
        state = State.START;
	}

    function ChangeState() external onlyAdmin {
       require(changeSate < 3, "You can't access this state");
        changeSate += 1;
        if(changeSate == 1) {
        state=State.REGESTRATION; 
        }else if(changeSate == 2){
        state=State.VOTING; 
        }else {
            state = State.RESULT;
        }   
        }

    function checkEligiblity(address _addr) internal view returns(bool){
        for(uint256 i ; i <=count; ++i){
            if(Candidate[i].addr == _addr) {
                revert Candidate_Already_Exist();
            }
        }
        return true;
    }

	function AddCandidateToVoting(string memory _name , uint256 _designation , uint256 _age , string memory _education,address _addr,string memory _imgURL) external onlyAdmin validState(State.REGESTRATION){
		require(_addr.code.length <=0, "Please provide EOA");
        require(checkEligiblity(_addr));
        require(_age > 18,"You are under age");
        require(_designation < 2, "This designation doesn't exist");
        count++;
        if(_designation == 1){
            blacklist[_addr] = true;
        }
		Candidate[count]=Candiate_details(count,0,_age,_designation,_addr,_name,_education,_imgURL);
	}

	function VoterRegisteration(uint256 _age) external validState(State.REGESTRATION){
        require(voters[msg.sender].age == 0,"You have already Registered");
		require(_age > 18, "You are under age");
        voters[msg.sender] = Voter(_age,false,false,true);
	}

	function ToVote(uint256 _CandidateId, uint256 _type) external validState(State.VOTING){
        require(_CandidateId != 0 && _CandidateId <= count,"This candidate does not Exist");
        if(_type == 0) {
        if(Candidate[_CandidateId].CandidateDesignation != _type) {
            revert CandidateNotExistForVP();
        }
        require(!blacklist[msg.sender], "President can't vote");
        
		require(voters[msg.sender].IsRegistered,"You are not registered");
		require(!voters[msg.sender].HasVotedForVicePresident,"You have already voted or abstain");
		voters[msg.sender].HasVotedForVicePresident=true;   
		Candidate[_CandidateId].CountVote += 1;
        if(_CandidateId != winnerVicePresident) {
        if(Candidate[_CandidateId].CountVote > Candidate[winnerVicePresident].CountVote) {
        winnerVicePresident = _CandidateId;
        }
        }
        }else {

            if(Candidate[_CandidateId].CandidateDesignation != _type) {
            revert CandidateNotExistForPresident();
        }
        require(voters[msg.sender].IsRegistered,"You are not registered");
	    require(!voters[msg.sender].HasVotedForVicePresident,"You have already voted or abstain");
		voters[msg.sender].HasVotedForPresident=true;   
		Candidate[_CandidateId].CountVote += 1;
        if(_CandidateId != winnerPresident) {
        if(Candidate[_CandidateId].CountVote > Candidate[winnerPresident].CountVote) {
        winnerPresident = _CandidateId;
        }
        }
        }
	}

    function abstain(uint256 _type) external validState(State.VOTING) {
         require(voters[msg.sender].IsRegistered,"You are not registered");
        if(_type == 0) {
 	require(!voters[msg.sender].HasVotedForVicePresident,"You have already voted or abstain");
       voters[msg.sender].HasVotedForVicePresident=true;  
        }else {
	   require(!voters[msg.sender].HasVotedForPresident,"You have already voted or abstain");
       voters[msg.sender].HasVotedForPresident=true;  
        }
    }

    function getpresident() external view validState(State.RESULT) returns(Candiate_details memory _result){
        return Candidate[winnerPresident];
    }

        function getVicePresident() external view validState(State.RESULT) returns(Candiate_details memory _result){
        return Candidate[winnerVicePresident];
    }

    function getCandidates() external view returns (Candiate_details[] memory candidates) {
        candidates = new Candiate_details[](count);
        for(uint256 i; i < count ; ++i) {
            candidates[i] = Candidate[i+1];
        }
    }


/// 0 = vicePresident
/// 1 = President
    
}
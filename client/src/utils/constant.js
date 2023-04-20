export const contractAbi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "CandidateNotExistForPresident",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "CandidateNotExistForVP",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "Candidate_Already_Exist",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "YouHaveAlreadyVotedOrAbstain",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_designation",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_age",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_education",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_addr",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_imgURL",
                "type": "string"
            }
        ],
        "name": "AddCandidateToVoting",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "Candidate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "idNo",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "CountVote",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "CandidateAge",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "CandidateDesignation",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "addr",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "CandidateName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "CandidateEducation",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "imgURL",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ChangeState",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_CandidateId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_type",
                "type": "uint256"
            }
        ],
        "name": "ToVote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_age",
                "type": "uint256"
            }
        ],
        "name": "VoterRegisteration",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_type",
                "type": "uint256"
            }
        ],
        "name": "abstain",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "admin",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "blacklist",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "changeSate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "count",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCandidates",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "idNo",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "CountVote",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "CandidateAge",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "CandidateDesignation",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "CandidateName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "CandidateEducation",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "imgURL",
                        "type": "string"
                    }
                ],
                "internalType": "struct Evoting.Candiate_details[]",
                "name": "candidates",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getVicePresident",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "idNo",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "CountVote",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "CandidateAge",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "CandidateDesignation",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "CandidateName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "CandidateEducation",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "imgURL",
                        "type": "string"
                    }
                ],
                "internalType": "struct Evoting.Candiate_details",
                "name": "_result",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getpresident",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "idNo",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "CountVote",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "CandidateAge",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "CandidateDesignation",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "CandidateName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "CandidateEducation",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "imgURL",
                        "type": "string"
                    }
                ],
                "internalType": "struct Evoting.Candiate_details",
                "name": "_result",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "state",
        "outputs": [
            {
                "internalType": "enum Evoting.State",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "voters",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "age",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "HasVotedForVicePresident",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "HasVotedForPresident",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "IsRegistered",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
export const contractAddress = "0x5E7d5bC8D1D440b6380B53f346bc750cd3ef2312"
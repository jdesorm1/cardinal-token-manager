export type CardinalUseInvalidator = {
  version: "0.0.0";
  name: "cardinal_use_invalidator";
  instructions: [
    {
      name: "init";
      accounts: [
        {
          name: "tokenManager";
          isMut: false;
          isSigner: false;
        },
        {
          name: "useInvalidator";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "bump";
          type: "u8";
        },
        {
          name: "maxUsages";
          type: {
            option: "u64";
          };
        }
      ];
    },
    {
      name: "incrementUsages";
      accounts: [
        {
          name: "tokenManager";
          isMut: false;
          isSigner: false;
        },
        {
          name: "useInvalidator";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "numUsages";
          type: "u64";
        }
      ];
    },
    {
      name: "invalidate";
      accounts: [
        {
          name: "tokenManager";
          isMut: true;
          isSigner: false;
        },
        {
          name: "useInvalidator";
          isMut: true;
          isSigner: false;
        },
        {
          name: "invalidator";
          isMut: true;
          isSigner: true;
        },
        {
          name: "cardinalTokenManager";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenManagerTokenAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "recipientTokenAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "issuerTokenAccount";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: "useInvalidator";
      type: {
        kind: "struct";
        fields: [
          {
            name: "bump";
            type: "u8";
          },
          {
            name: "usages";
            type: "u64";
          },
          {
            name: "maxUsages";
            type: {
              option: "u64";
            };
          },
          {
            name: "useAuthority";
            type: "publicKey";
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 300;
      name: "InvalidPaymentTokenAccount";
      msg: "Token account not owned by the claim approver";
    },
    {
      code: 301;
      name: "InvalidIssuerTokenAccount";
      msg: "Token account not owned by the issuer";
    },
    {
      code: 302;
      name: "InvalidTokenManager";
      msg: "Invalid token manager for this claim approver";
    },
    {
      code: 303;
      name: "InsufficientUsages";
      msg: "Usages at the maximum";
    }
  ];
};

export const IDL: CardinalUseInvalidator = {
  version: "0.0.0",
  name: "cardinal_use_invalidator",
  instructions: [
    {
      name: "init",
      accounts: [
        {
          name: "tokenManager",
          isMut: false,
          isSigner: false,
        },
        {
          name: "useInvalidator",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "bump",
          type: "u8",
        },
        {
          name: "maxUsages",
          type: {
            option: "u64",
          },
        },
      ],
    },
    {
      name: "incrementUsages",
      accounts: [
        {
          name: "tokenManager",
          isMut: false,
          isSigner: false,
        },
        {
          name: "useInvalidator",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "numUsages",
          type: "u64",
        },
      ],
    },
    {
      name: "invalidate",
      accounts: [
        {
          name: "tokenManager",
          isMut: true,
          isSigner: false,
        },
        {
          name: "useInvalidator",
          isMut: true,
          isSigner: false,
        },
        {
          name: "invalidator",
          isMut: true,
          isSigner: true,
        },
        {
          name: "cardinalTokenManager",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenManagerTokenAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "recipientTokenAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "issuerTokenAccount",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "useInvalidator",
      type: {
        kind: "struct",
        fields: [
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "usages",
            type: "u64",
          },
          {
            name: "maxUsages",
            type: {
              option: "u64",
            },
          },
          {
            name: "useAuthority",
            type: "publicKey",
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 300,
      name: "InvalidPaymentTokenAccount",
      msg: "Token account not owned by the claim approver",
    },
    {
      code: 301,
      name: "InvalidIssuerTokenAccount",
      msg: "Token account not owned by the issuer",
    },
    {
      code: 302,
      name: "InvalidTokenManager",
      msg: "Invalid token manager for this claim approver",
    },
    {
      code: 303,
      name: "InsufficientUsages",
      msg: "Usages at the maximum",
    },
  ],
};
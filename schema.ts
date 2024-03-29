/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/api/v1/Activities": {
    get: {
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain; v=1.0": components["schemas"]["Activity"][];
            "application/json; v=1.0": components["schemas"]["Activity"][];
            "text/json; v=1.0": components["schemas"]["Activity"][];
          };
        };
      };
    };
    post: {
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain; v=1.0": components["schemas"]["Activity"];
            "application/json; v=1.0": components["schemas"]["Activity"];
            "text/json; v=1.0": components["schemas"]["Activity"];
          };
        };
      };
      requestBody: {
        content: {
          "application/json; v=1.0": components["schemas"]["Activity"];
          "text/json; v=1.0": components["schemas"]["Activity"];
          "application/*+json; v=1.0": components["schemas"]["Activity"];
        };
      };
    };
  };
  "/api/v1/Activities/{id}": {
    get: {
      parameters: {
        path: {
          id: number;
        };
      };
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain; v=1.0": components["schemas"]["Activity"][];
            "application/json; v=1.0": components["schemas"]["Activity"][];
            "text/json; v=1.0": components["schemas"]["Activity"][];
          };
        };
      };
    };
    put: {
      parameters: {
        path: {
          id: number;
        };
      };
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain; v=1.0": components["schemas"]["Activity"];
            "application/json; v=1.0": components["schemas"]["Activity"];
            "text/json; v=1.0": components["schemas"]["Activity"];
          };
        };
      };
      requestBody: {
        content: {
          "application/json; v=1.0": components["schemas"]["Activity"];
          "text/json; v=1.0": components["schemas"]["Activity"];
          "application/*+json; v=1.0": components["schemas"]["Activity"];
        };
      };
    };
    delete: {
      parameters: {
        path: {
          id: number;
        };
      };
      responses: {
        /** Success */
        200: unknown;
      };
    };
  };
  "/api/v1/Authors": {
    get: {
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain; v=1.0": components["schemas"]["Author"][];
            "application/json; v=1.0": components["schemas"]["Author"][];
            "text/json; v=1.0": components["schemas"]["Author"][];
          };
        };
      };
    };
    post: {
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain; v=1.0": components["schemas"]["Author"];
            "application/json; v=1.0": components["schemas"]["Author"];
            "text/json; v=1.0": components["schemas"]["Author"];
          };
        };
      };
      requestBody: {
        content: {
          "application/json; v=1.0": components["schemas"]["Author"];
          "text/json; v=1.0": components["schemas"]["Author"];
          "application/*+json; v=1.0": components["schemas"]["Author"];
        };
      };
    };
  };
  "/api/v1/Authors/authors/books/{idBook}": {
    get: {
      parameters: {
        path: {
          idBook: number;
        };
      };
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain; v=1.0": components["schemas"]["Author"][];
            "application/json; v=1.0": components["schemas"]["Author"][];
            "text/json; v=1.0": components["schemas"]["Author"][];
          };
        };
      };
    };
  };
  "/api/v1/Authors/{id}": {
    get: {
      parameters: {
        path: {
          id: number;
        };
      };
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain; v=1.0": components["schemas"]["Author"];
            "application/json; v=1.0": components["schemas"]["Author"];
            "text/json; v=1.0": components["schemas"]["Author"];
          };
        };
      };
    };
    put: {
      parameters: {
        path: {
          id: number;
        };
      };
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain; v=1.0": components["schemas"]["Author"];
            "application/json; v=1.0": components["schemas"]["Author"];
            "text/json; v=1.0": components["schemas"]["Author"];
          };
        };
      };
      requestBody: {
        content: {
          "application/json; v=1.0": components["schemas"]["Author"];
          "text/json; v=1.0": components["schemas"]["Author"];
          "application/*+json; v=1.0": components["schemas"]["Author"];
        };
      };
    };
    delete: {
      parameters: {
        path: {
          id: number;
        };
      };
      responses: {
        /** Success */
        200: unknown;
      };
    };
  };
  "/api/v1/Books": {
    get: {
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain; v=1.0": components["schemas"]["Book"][];
            "application/json; v=1.0": components["schemas"]["Book"][];
            "text/json; v=1.0": components["schemas"]["Book"][];
          };
        };
      };
    };
    post: {
      responses: {
        /** Success */
        200: unknown;
      };
      requestBody: {
        content: {
          "application/json; v=1.0": components["schemas"]["Book"];
          "text/json; v=1.0": components["schemas"]["Book"];
          "application/*+json; v=1.0": components["schemas"]["Book"];
        };
      };
    };
  };
  "/api/v1/Books/{id}": {
    get: {
      parameters: {
        path: {
          id: number;
        };
      };
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain; v=1.0": components["schemas"]["Book"];
            "application/json; v=1.0": components["schemas"]["Book"];
            "text/json; v=1.0": components["schemas"]["Book"];
          };
        };
      };
    };
    put: {
      parameters: {
        path: {
          id: number;
        };
      };
      responses: {
        /** Success */
        200: unknown;
      };
      requestBody: {
        content: {
          "application/json; v=1.0": components["schemas"]["Book"];
          "text/json; v=1.0": components["schemas"]["Book"];
          "application/*+json; v=1.0": components["schemas"]["Book"];
        };
      };
    };
    delete: {
      parameters: {
        path: {
          id: number;
        };
      };
      responses: {
        /** Success */
        200: unknown;
      };
    };
  };
  "/api/v1/CoverPhotos": {
    get: {
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain; v=1.0": components["schemas"]["CoverPhoto"][];
            "application/json; v=1.0": components["schemas"]["CoverPhoto"][];
            "text/json; v=1.0": components["schemas"]["CoverPhoto"][];
          };
        };
      };
    };
    post: {
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain; v=1.0": components["schemas"]["CoverPhoto"];
            "application/json; v=1.0": components["schemas"]["CoverPhoto"];
            "text/json; v=1.0": components["schemas"]["CoverPhoto"];
          };
        };
      };
      requestBody: {
        content: {
          "application/json; v=1.0": components["schemas"]["CoverPhoto"];
          "text/json; v=1.0": components["schemas"]["CoverPhoto"];
          "application/*+json; v=1.0": components["schemas"]["CoverPhoto"];
        };
      };
    };
  };
  "/api/v1/CoverPhotos/books/covers/{idBook}": {
    get: {
      parameters: {
        path: {
          idBook: number;
        };
      };
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain; v=1.0": components["schemas"]["CoverPhoto"][];
            "application/json; v=1.0": components["schemas"]["CoverPhoto"][];
            "text/json; v=1.0": components["schemas"]["CoverPhoto"][];
          };
        };
      };
    };
  };
  "/api/v1/CoverPhotos/{id}": {
    get: {
      parameters: {
        path: {
          id: number;
        };
      };
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain; v=1.0": components["schemas"]["CoverPhoto"];
            "application/json; v=1.0": components["schemas"]["CoverPhoto"];
            "text/json; v=1.0": components["schemas"]["CoverPhoto"];
          };
        };
      };
    };
    put: {
      parameters: {
        path: {
          id: number;
        };
      };
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain; v=1.0": components["schemas"]["CoverPhoto"];
            "application/json; v=1.0": components["schemas"]["CoverPhoto"];
            "text/json; v=1.0": components["schemas"]["CoverPhoto"];
          };
        };
      };
      requestBody: {
        content: {
          "application/json; v=1.0": components["schemas"]["CoverPhoto"];
          "text/json; v=1.0": components["schemas"]["CoverPhoto"];
          "application/*+json; v=1.0": components["schemas"]["CoverPhoto"];
        };
      };
    };
    delete: {
      parameters: {
        path: {
          id: number;
        };
      };
      responses: {
        /** Success */
        200: unknown;
      };
    };
  };
  "/api/v1/Users": {
    get: {
      responses: {
        /** Success */
        200: {
          content: {
            "text/plain; v=1.0": components["schemas"]["User"][];
            "application/json; v=1.0": components["schemas"]["User"][];
            "text/json; v=1.0": components["schemas"]["User"][];
          };
        };
      };
    };
    post: {
      responses: {
        /** Success */
        200: unknown;
      };
      requestBody: {
        content: {
          "application/json; v=1.0": components["schemas"]["User"];
          "text/json; v=1.0": components["schemas"]["User"];
          "application/*+json; v=1.0": components["schemas"]["User"];
        };
      };
    };
  };
  "/api/v1/Users/{id}": {
    get: {
      parameters: {
        path: {
          id: number;
        };
      };
      responses: {
        /** Success */
        200: unknown;
      };
    };
    put: {
      parameters: {
        path: {
          id: number;
        };
      };
      responses: {
        /** Success */
        200: unknown;
      };
      requestBody: {
        content: {
          "application/json; v=1.0": components["schemas"]["User"];
          "text/json; v=1.0": components["schemas"]["User"];
          "application/*+json; v=1.0": components["schemas"]["User"];
        };
      };
    };
    delete: {
      parameters: {
        path: {
          id: number;
        };
      };
      responses: {
        /** Success */
        200: unknown;
      };
    };
  };
}

export interface components {
  schemas: {
    Activity: {
      /** Format: int32 */
      id?: number;
      title?: string | null;
      /** Format: date-time */
      dueDate?: string;
      completed?: boolean;
    };
    Author: {
      /** Format: int32 */
      id?: number;
      /** Format: int32 */
      idBook?: number;
      firstName?: string | null;
      lastName?: string | null;
    };
    Book: {
      /** Format: int32 */
      id?: number;
      title?: string | null;
      description?: string | null;
      /** Format: int32 */
      pageCount?: number;
      excerpt?: string | null;
      /** Format: date-time */
      publishDate?: string;
    };
    CoverPhoto: {
      /** Format: int32 */
      id?: number;
      /** Format: int32 */
      idBook?: number;
      /** Format: uri */
      url?: string | null;
    };
    User: {
      /** Format: int32 */
      id?: number;
      userName?: string | null;
      password?: string | null;
    };
  };
}

export interface operations {}

export interface external {}

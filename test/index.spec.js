const { lowCaseKeys, upCaseKeys } = require("../src/index");

describe("Main tests", () => {
	test("Should return an object with lowerCase first char keys", () => {
		// Arrange
		const data = {
			Foo: "foo",
			BAR: "BAR",
			Baz: {
				SUb1: "sub1",
				sUb2: "sub2",
			},
		};

		// Act
		const result = lowCaseKeys(data);

		// Assert
		expect(result.foo).toBeDefined();
		expect(result.bAR).toBeDefined();
		expect(result.baz).toBeDefined();
		expect(result.baz.sUb1).toBeDefined();
		expect(result.baz.sUb2).toBeDefined();
	});

	test("Should return an object with upCase first char keys", () => {
		// Arrange
		const data = {
			Foo: "foo",
			BAR: "BAR",
			Baz: {
				SUb1: "sub1",
				sUb2: "sub2",
			},
		};

		// Act
		const result = upCaseKeys(data);

		// Assert
		expect(result.Foo).toBeDefined();
		expect(result.BAR).toBeDefined();
		expect(result.Baz).toBeDefined();
		expect(result.Baz.SUb1).toBeDefined();
		expect(result.Baz.SUb2).toBeDefined();
	});

	test("Should set correctly null and undefined", () => {
		const data = JSON.parse(`
		{
			"Id": 21,
			"CustomerTypeId": null,
			"Name": "Customer Name",
			"Note": null,
			"RowVersion": "AAAAAAAAZ0k=",
			"SellerId": null,
			"Vat": "00000000000",
			"Address": {
			  "City": "New York",
			  "Street": "Another Street"
			},
			"EMails": {
			  "Email1": null,
			  "Email2": null,
			  "Email3": "mail1@domain.com"
			}
		  }
		`);

		const result = lowCaseKeys(data);
		
		// Assert
		expect(result.id).toBeDefined();

		expect(result.customerTypeId).toBeDefined();
		expect(result.customerTypeId).toBeNull();

		expect(result.sendMail).toBeUndefined();
	});
});

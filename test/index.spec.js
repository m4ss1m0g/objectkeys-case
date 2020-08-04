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

	test("Should return an object with lowerCase first char keys from raw", () => {
		const raw = `
		{
			"@odata.context": "http://localhost:8088/commons/odata/$metadata#Customers/$entity",
			"Id": 1,
			"CustomerTypeId": null,
			"MailMarketing": false,
			"Name": "MULTI SPA",
			"Note": null,
			"RowVersion": "AAAAAAAAZzY=",
			"SellerId": null,
			"Vat": "1231231233",
			"Address": {
			  "City": "ROME",
			  "Street": "VIA PIAVE"
			},
			"EMails": {
			  "EMail1": "email1@domain.info",
			  "EMail2": "email2@domain.info",
			  "EMail3": null
			}
		  }
		`;

		const data = JSON.parse(raw);

		// Act
		const result = lowCaseKeys(data);

		// Assert
		expect(result["@odata.context"]).toBe(
			"http://localhost:8088/commons/odata/$metadata#Customers/$entity"
		);
		expect(result.id).toBe(1);
		expect(result.customerTypeId).toBeNull();
		expect(result.mailMarketing).toBeFalsy();
		expect(result.name).toBe("MULTI SPA");
		expect(result.note).toBeNull();
		expect(result.rowVersion).toBe("AAAAAAAAZzY=");
		expect(result.sellerId).toBeNull();
		expect(result.vat).toBe("1231231233");

		expect(result.address.city).toBe("ROME");
		expect(result.address.street).toBe("VIA PIAVE");

		expect(result.eMails.eMail1).toBe("email1@domain.info");
		expect(result.eMails.eMail2).toBe("email2@domain.info");
		expect(result.eMails.eMail3).toBeNull();
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

	test("Should set correctly null", () => {
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

	test("Should parse an object with array", () => {
		const raw = `
		{
			"@odata.context":"http://localhost:8088/commons/odata/$metadata#Customers(Id,Contacts())/$entity",
			"Id":1,
			"Contacts":[
				{"Id":8001,"LastName":"Foo","FirstName":"Bar","FullName":"Foo Bar","Phone1":"1111","Phone2":"2222","RowVersion":"AAAAAAABX5I=","CustomerId":1,"Email":"aa@bb.it"},
				{"Id":10001,"LastName":"John","FirstName":"Doe","FullName":"John Doe","Phone1":"00112291212","Phone2":null,"RowVersion":"AAAAAAABnhE=","CustomerId":1,"Email":"npioc@imail8.net"},
				{"Id":10002,"LastName":"John","FirstName":"Doe","FullName":"John Doe","Phone1":"00112291212","Phone2":"233323","RowVersion":"AAAAAAABnhM=","CustomerId":1,"Email":"npioc@imail8.net"}
			]}
		`;

		const data = JSON.parse(raw);

		const result = lowCaseKeys(data);

		// console.log(result);

		expect(result.id).toBeDefined();
		expect(result.contacts).toBeDefined();
		expect(result.contacts[0].id).toBeDefined();
		expect(result.contacts[1].id).toBeDefined();
		expect(result.contacts[2].id).toBeDefined();

		expect(Array.isArray(result.contacts)).toBeTruthy();
	});

	it("Should parse an array", () => {
		const raw = `
			[
				{"Id":8001,"LastName":"Foo","FirstName":"Bar","FullName":"Foo Bar","Phone1":"1111","Phone2":"2222","RowVersion":"AAAAAAABX5I=","CustomerId":1,"Email":"aa@bb.it"},
				{"Id":10001,"LastName":"John","FirstName":"Doe","FullName":"John Doe","Phone1":"00112291212","Phone2":null,"RowVersion":"AAAAAAABnhE=","CustomerId":1,"Email":"npioc@imail8.net"},
				{"Id":10002,"LastName":"John","FirstName":"Doe","FullName":"John Doe","Phone1":"00112291212","Phone2":"233323","RowVersion":"AAAAAAABnhM=","CustomerId":1,"Email":"npioc@imail8.net"}
			]
		`;

		const data = JSON.parse(raw);

		const result = lowCaseKeys(data);

		expect(Array.isArray(result)).toBeTruthy();

		expect(result[0].id).toBeDefined();
		expect(result[1].id).toBeDefined();
		expect(result[2].id).toBeDefined();
	});
});

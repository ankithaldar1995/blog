export interface IBlog {
    id : string,
	title :string,
	author : string,
	mainImg :string,
	genre : string,
	comment : [string],
	rating	: number,
	info : string,
	status : string,
	authorId : number
}

export class Blog implements IBlog{
	public id : string;
	public title :string;
	public author : string;
	public mainImg :string;
	public genre : string;
	public comment : [string];
	public rating	: number;
	public info : string;
	public status : string;
	public authorId : number;
}

export interface IAuthor{
	name : string,
	age : number,
	city : string,
	email : string,
	status : string,
	password: string,
	authorId: number
}

export class Author implements IAuthor{
	public name : string;
	public age : number;
	public city : string;
	public email : string;
	public status : string;
	public password: string;
	public authorId: number;
}

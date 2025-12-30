export interface Mapper<I, O> {
	mapFrom(param: I): O;
	from(param: O): I;
}

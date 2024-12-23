export function input(){
return (
<><label>Email</label>
          <input
          id="email"
            className="border-[1px] pt-[12px] pb-[12px] rounded-[8px] w-[416px]"
            placeholder="Placeholder"
            type="text"
            onChange={onChange}
            value={form.email}
          ></input></>
);
}
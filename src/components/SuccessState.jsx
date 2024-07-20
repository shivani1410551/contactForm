const SuccessState = () => {
  return (
    <div className="bg-GreyDarker text-White p-4 rounded-lg absolute top-1">
      <h1 className="md:text-[0.8rem] sm:text-[0.5rem] xs:text-[0.5rem]">
        <i class="fa-regular fa-circle-check pr-2"></i>
        Message Sent!
      </h1>
      <p className="md:text-[0.7rem] xs:text-[0.4rem] text-gray-300 pt-1">
        Thanks for completing the form. We'll be in touch soon!
      </p>
    </div>
  );
};

export default SuccessState;

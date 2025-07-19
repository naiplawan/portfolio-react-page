import SkillBox from './Skill-Box';

function SkillSection() { 
  return (
    <>
    <div className="flex flex-row mb- mt-10 h-full">
      {/* Skill 1 */}

      <div>
      <SkillBox
        title="Creative"
        description=" bring innovative problem-solving, attention to detail,
         and a keen eye for design?"
        imageSrc="/Group 242.svg" 
      />
      </div>

      {/* Skill 2 */}
      <div>
      <SkillBox
        title="TeamWork"
        description="I am a collaborative team player who fosters a positive work environment, 
        encourages open communication, and brings out the best in every team member?"
        imageSrc="/teamwork-skill.svg"
      />
      </div>

      {/* Skill 3 */}
      <div> 
      <SkillBox
        title="Communicative"
        description="I excel in conveying complex ideas with clarity and building strong relationships with clients and stakeholders"
        imageSrc="/Group.svg"
      />
      </div>
{/* 
      Skill 4 */}
      <div>
      <SkillBox
        title="Growth Mindset "
        description=" I embrace challenges as opportunities to learn and improve. With a positive attitude towards continuous growth"
        imageSrc="/growth-mindset.png"
      />  
      </div>

    </div>
    </>
  );
}

export default SkillSection; 

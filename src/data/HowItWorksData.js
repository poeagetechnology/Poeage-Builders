import {
  FaClipboardList,
  FaMapMarkedAlt,
  FaDraftingCompass,
  FaFileSignature,
  FaHardHat,
  FaClipboardCheck,
  FaHandshake,
} from "react-icons/fa";

export const steps = [
  {
    step: "01",
    title: "Requirement Discovery",
    desc: "Understanding business goals, scope, budget, and constraints before any commitment.",
    icon: FaClipboardList,
  },
  {
    step: "02",
    title: "Site Analysis & Feasibility",
    desc: "Evaluating site conditions, regulations, risks, and cost viability.",
    icon: FaMapMarkedAlt,
  },
  {
    step: "03",
    title: "Design & Planning",
    desc: "Architectural and technical planning aligned with execution reality.",
    icon: FaDraftingCompass,
  },
  {
    step: "04",
    title: "Approval & Scheduling",
    desc: "Final approvals, BOQ confirmation, and disciplined timelines.",
    icon: FaFileSignature,
  },
  {
    step: "05",
    title: "Construction & Execution",
    desc: "Controlled on-site execution with strict quality oversight.",
    icon: FaHardHat,
  },
  {
    step: "06",
    title: "Inspection & Handover",
    desc: "Final verification, snag resolution, and documentation.",
    icon: FaClipboardCheck,
  },
  {
    step: "07",
    title: "Post-Completion Support",
    desc: "Ongoing assistance and long-term client support.",
    icon: FaHandshake,
  },
];
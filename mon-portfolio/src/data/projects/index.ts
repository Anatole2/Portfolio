import type { Project } from '../../types/project';
import { laravelFerrysProject } from './laravelFerrys';
import { cFerryProject } from './cFerry';
import { signobotProject } from './signobot';
import { evoBoticsProject } from './evobotics';
import { laSocieteProject } from './laSociete';
import { syndexProject } from './syndex';
import { urcProject } from './urc';
import { matReventeProject } from './matrevente';
import { vsSAOProject } from './vsSAO';
import { discourdProject } from './discourd';

export const projectsList: Project[] = [
    evoBoticsProject,
    laSocieteProject,
    signobotProject,
    vsSAOProject,
    discourdProject,
    matReventeProject,
    urcProject,
    syndexProject,
    laravelFerrysProject,
    cFerryProject,
];